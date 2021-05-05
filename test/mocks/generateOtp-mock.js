
const mockParams = {
  query: {
    maskedMsisdn: '063***7038',
    idNumber: 'C3DUATOO251',
    docType: 'PASSPORT'
  }
};

const success = {
  mock: {
    ok: true,
    status: 200,
    data:
    {
      sendAttempts: 1,
      links: [
        {
          rel: 'self',
          href: 'http://vod-ms-swagger-combined.qa.cloud.vodacom.corp/public-services/vetting/generateOtp?idNumber=C3DUATOO251&docType=PASSPORT&maskedMsisdn=063***7038'
        }
      ]
    }
  },
  expected: {
    result:
    {
      sendAttempts: 1,
      links: [
        {
          rel: 'self',
          href: 'http://vod-ms-swagger-combined.qa.cloud.vodacom.corp/public-services/vetting/generateOtp?idNumber=C3DUATOO251&docType=PASSPORT&maskedMsisdn=063***7038'
        }
      ]
    }
  }
};

const failure = {
  mock: {
    ok: false,
    error: {
      response: {
        status: 400,
        statusText: 'Bad Request'
      }
    }
  },
  expected: {
    result: {
      status: 400,
      error: 'Bad Request',
      message: 'Bad Request'
    }
  }
};

module.exports = {
  mockParams,
  success,
  failure
};
