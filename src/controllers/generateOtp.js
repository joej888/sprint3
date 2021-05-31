const config = require('config');
const { Sentry } = require('vod-npm-sentry');
const sentryCategory = config.get('sentry.categories.generateOtp');
const { vettingService } = require('vod-npm-services');
const prometheusClient = require('restify-prom-bundle').client;

const generateOtpErr = new prometheusClient.Counter({
  name: 'upgrade_journey_generate_otp_error_count',
  help: 'vod-ms-vetting authentication error'
});

exports.handler = async function generateOtp(req, res, next) {

  Sentry.info('Beginning generateOtp...', {}, sentryCategory);

  const params = {
    headers: req.headers,
    idNumber: req.query.idNumber,
    docType: req.query.docType,
    maskedMsisdn: req.query.maskedMsisdn
  };

  const response = await vettingService.generateOtp(req, params);

  if (!response.ok) {
    generateOtpErr.inc();
    return next(response.error);
  }

  res.status(response.status);
  res.json(response.data);
  return next();
};
