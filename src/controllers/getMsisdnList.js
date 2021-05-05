const config = require('config');
const { Sentry } = require('vod-npm-sentry');
const sentryCategory = config.get('sentry.categories.getMsisdnList');
const { vettingService } = require('vod-npm-services');
const prometheusClient = require('restify-prom-bundle').client;

const msisdnListErr = new prometheusClient.Counter({
  name: 'app_sales_msisdn_list_error_count',
  help: 'vod-ms-vetting authentication error'
});

exports.handler = async function getMsisdnsForAuthenticationPublic(req, res, next) {

  Sentry.info('Beginning get Msisdn List...', {}, sentryCategory);

  const params = {
    headers: req.headers,
    idNumber: req.params.idNumber,
    docType: req.query.docType
  };

  const response = await vettingService.getMsisdnsForAuthenticationPublic(req, params);

  if (!response.ok) {
    msisdnListErr.inc();
    return next(response.error);
  }

  res.status(response.status);
  res.json(response.data);
  return next();
};
