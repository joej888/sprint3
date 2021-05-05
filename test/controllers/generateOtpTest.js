import chai from 'chai';
import config from 'config';
import httpMocks from 'node-mocks-http';
import httpStatus from 'http-status-codes';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { handler as generateOtp } from '../../src/controllers/generateOtp';
import * as serviceStub from 'vod-npm-services/vod-ms-vetting/service';

import {
  success,
  failure,
  mockParams
} from '../mocks/generateOtp-mock';

chai.use(sinonChai);

const expect = chai.expect;

let req, res, next, logger, generateOtpStub;

describe('Given generateOtp controller', function () {
  before(() => {
    generateOtpStub = sinon.stub(serviceStub, 'generateOtp');

    logger = require('vod-npm-console-logger').createLogger({
      name: 'vod-ms-app-checkout-authentication',
      level: config.get('log.level')
    });
  });

  beforeEach(() => {
    generateOtpStub.reset();
    generateOtpStub.throws(new Error('Generate Otp stub called with invalid params'));

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
    generateOtpStub.restore();
  });

  it('returns 200 when given a valid request', async () => {

    generateOtpStub
      .withArgs(req, {
        headers: req.headers,
        ...mockParams.query
      })
      .resolves(success.mock);

    await generateOtp(req, res, next);

    const response = JSON.parse(res._getData());

    expect(res._getStatusCode()).to.equal(httpStatus.OK);
    expect(response).to.deep.equal(success.expected.result);
  });

  it('invokes error middleware correctly when vod-ms-vetting fails', async () => {
    generateOtpStub
      .withArgs(req, {
        headers: req.headers,
        ...mockParams.query
      })
      .resolves(failure.mock);

    await generateOtp(req, res, next);

    sinon.assert.calledOnce(next);
    sinon.assert.calledWith(next, failure.mock.error);
  });
});
