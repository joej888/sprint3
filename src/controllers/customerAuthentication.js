const config = require('config');
const { vettingService } = require('vod-npm-services');
const httpStatus = require('http-status-codes');
const { Sentry } = require('vod-npm-sentry');
const { extractToken } = require('../helpers/tokenValidation');
const prometheusClient = require('restify-prom-bundle').client;

const sentryCategory = config.get('sentry.categories.checkoutAuthentication');

const tokenExtractionErr = new prometheusClient.Counter({
  name: 'app_sales_token_extraction_error_count',
  help: 'vod-ms-vetting header malformed'
});

const customerAuthErr = new prometheusClient.Counter({
  name: 'app_sales_customer_authentication_error_count',
  help: 'vod-ms-vetting authentication error'
});

exports.handler = async function customerAuthentication(req, res, next) {
  Sentry.info('Initiate customer authentication request', {}, sentryCategory);

  const params = {
    headers: req.headers,
    idNumber: req.query.idNumber,
    docType: req.query.docType,
    maskedMsisdn: req.query.maskedMsisdn,
    otp: req.query.otp
  };

  const response = await vettingService.authenticateAlternativeNumber(req, params);

  if (!response.ok) {
    if (response.error
      && response.error.response
      && response.error.response.data
      && response.error.response.data.messages
      && response.error.response.data.messages[0]
      && response.error.response.data.messages[0].message === 'Unauthorized') {
      response.error.response.status = httpStatus.BAD_REQUEST;
    }
    customerAuthErr.inc();
    return next(response.error);
  }

  const token = extractToken(response);

  if (!token) {
    tokenExtractionErr.inc();
    return next(new Error('InvalidHeader'));
  }

  response.data.webAuthToken = token;

  res.status(httpStatus.OK);
  res.json({
    result: response.data
  });

  return next();
};
