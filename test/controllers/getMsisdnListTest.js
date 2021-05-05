import chai from 'chai';
import config from 'config';
import httpMocks from 'node-mocks-http';
import httpStatus from 'http-status-codes';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { handler as getMsisdnList } from '../../src/controllers/getMsisdnList';
import * as serviceStub from 'vod-npm-services/vod-ms-vetting/service';

import {
  success,
  failure,
  mockParams
} from '../mocks/getMsisdnList-mock';

chai.use(sinonChai);

const expect = chai.expect;

let req, res, next, logger, getMsisdnListStub;

describe('Given getMsisdnList controller', function () {
  before(() => {
    getMsisdnListStub = sinon.stub(serviceStub, 'getMsisdnsForAuthenticationPublic');

    logger = require('vod-npm-console-logger').createLogger({
      name: 'vod-ms-app-checkout-authentication',
      level: config.get('log.level')
    });
  });

  beforeEach(() => {
    getMsisdnListStub.reset();
    getMsisdnListStub.throws(new Error('Get Msisdn List stub called with invalid params'));

    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = sinon.spy();

    req.headers = {
      authorization: 'token'
    };
    req.log = logger;
    req.query = mockParams.query;
    req.params = mockParams.pathParams;
  });

  afterEach(() => {
    req = null;
    res = null;
    next = null;
  });

  after(() => {
    getMsisdnListStub.restore();
  });

  it('returns 200 when given a valid request', async () => {

    getMsisdnListStub
      .withArgs(req, {
        headers: req.headers,
        ...mockParams.query,
        ...mockParams.pathParams
      })
      .resolves(success.mock);

    await getMsisdnList(req, res, next);

    const response = JSON.parse(res._getData());

    expect(res._getStatusCode()).to.equal(httpStatus.OK);
    expect(response).to.deep.equal(success.expected.result);
  });

  it('invokes error middleware correctly when vod-ms-vetting fails', async () => {
    getMsisdnListStub
      .withArgs(req, {
        headers: req.headers,
        ...mockParams.query,
        ...mockParams.pathParams
      })
      .resolves(failure.mock);

    await getMsisdnList(req, res, next);

    sinon.assert.calledOnce(next);
    sinon.assert.calledWith(next, failure.mock.error);
  });
});
