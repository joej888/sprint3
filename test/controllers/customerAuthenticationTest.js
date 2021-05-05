import chai from 'chai';
import config from 'config';
import httpMocks from 'node-mocks-http';
import httpStatus from 'http-status-codes';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { handler as customerAuthentication } from '../../src/controllers/customerAuthentication';
import * as serviceStub from 'vod-npm-services/vod-ms-vetting/service';

import {
  success,
  failure,
  mockParams,
  invalidHeaders,
  unauthorized
} from '../mocks/customerAuthentication-mock';

chai.use(sinonChai);

const expect = chai.expect;

let req, res, next, logger, customerAuthenticationStub;

describe('Given customerAuthentication controller', function () {
  before(() => {
    customerAuthenticationStub = sinon.stub(serviceStub, 'authenticateAlternativeNumber');

    logger = require('vod-npm-console-logger').createLogger({
      name: 'vod-ms-app-checkout-authentication',
      level: config.get('log.level')
    });
  });

  beforeEach(() => {
    customerAuthenticationStub.reset();
    customerAuthenticationStub.throws(new Error('Generate Otp stub called with invalid params'));

    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = sinon.spy();

    req.headers = {
      authorization: 'token'
    };
    req.log = logger;
    req.query = mockParams.query;
  });

  afterEach(() => {
    req = null;
    res = null;
    next = null;
  });

  after(() => {
    customerAuthenticationStub.restore();
  });

  it('returns 200 when given a valid request', async () => {

    customerAuthenticationStub
      .withArgs(req, {
        headers: req.headers,
        ...mockParams.query
      })
      .resolves(success.mock);

    await customerAuthentication(req, res, next);

    const response = JSON.parse(res._getData());

    expect(res._getStatusCode()).to.equal(httpStatus.OK);
    expect(response).to.deep.equal(success.expected);
  });

  it('Converts 401 \'Unauthorized\' to 400', async () => {

    customerAuthenticationStub
      .withArgs(req, {
        headers: req.headers,
        ...mockParams.query
      })
      .resolves(unauthorized.mock);

    await customerAuthentication(req, res, next);

    sinon.assert.calledOnce(next);
  });

  it('returns 424 when invalid header is returned', async () => {

    customerAuthenticationStub
      .withArgs(req, {
        headers: req.headers,
        ...mockParams.query
      })
      .resolves(invalidHeaders.mock);

    await customerAuthentication(req, res, next);

    sinon.assert.calledOnce(next);
    const expectedErr = sinon.match.instanceOf(Error)
      .and(sinon.match.has('message', 'InvalidHeader'));

    sinon.assert.calledWith(next, expectedErr);
  });

  it('invokes error middleware correctly when vod-ms-vetting fails', async () => {
    customerAuthenticationStub
      .withArgs(req, {
        headers: req.headers,
        ...mockParams.query
      })
      .resolves(failure.mock);

    await customerAuthentication(req, res, next);

    sinon.assert.calledOnce(next);
    sinon.assert.calledWith(next, failure.mock.error);
  });
});
