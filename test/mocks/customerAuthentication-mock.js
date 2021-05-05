/* eslint-disable max-len */

const mockParams = {
  query: {
    maskedMsisdn: '063***7038',
    idNumber: '0829299136',
    docType: 'MSISDN',
    otp: '0000'
  }
};

const unauthorized = {
  mock: {
    ok: false,
    status: 401,
    error: {
      response: {
        data:
        {
          messages: [
            {
              message: 'Unauthorized',
              namespace: '',
              key: 'Error Authenticating user:',
              severity: null
            }
          ],
          result: {
            sendAttempts: 0,
            authenticationAttempts: 1
          },
          successful: false,
          code: 0
        }
      }
    },
    headers: {
      server: 'nginx/1.15.5',
      date: 'Mon, 14 Sep 2020 08:41:41 GMT',
      'content-type': 'application/json;charset=UTF-8',
      'transfer-encoding': 'chunked',
      connection: 'close',
      vary: 'Accept-Encoding',
      expires: '0',
      'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
      'set-cookie': [
        'vod-web-auth-token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAxNTkzMDEsInVzZXJfbmFtZSI6IjI3ODI1MDI2MzE3IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9WRVRUSU5HX01BSCJdLCJqdGkiOiIyY2FmZWE4NS1lZmZmLTRhOGQtYjM1NS02NTM3ZDlmMjZlMzciLCJjbGllbnRfaWQiOiJyZXN0YXBpIiwic2NvcGUiOlsib3BlbmlkIl19.AsxduMHHAmln5EBeE-LJbcAiUKvB5fg8BH_FRFNflG4us3g5rpcY-j1CaUzpTOymPeNuRThWbPFMKgT30vh6KTpmjusCz21GymoGt0_2v4MysYyISMDKTVRNBoBWvCNzn5_htDb3qAeUS3JeQgcbqGfBPb1sbuCC8GA-Tawi9UrqikbdNrn1y842jM_WgCeLAb2CvBjfVJP9fnh9RTJhLUmP5qkT7wHA9DZVAYhhE0FPX3btF8TcyzfFgGidYVnImwZH9ZlRrJVnR9GJNZn4gmynTtt1cD27ilNd72zAS_TQFWP4Kd1kDDEhIoYSADk2QNQKpBteTS1JiKsPLNckVg; path=/; domain=.vodacom.co.za; Max-Age=10800; Expires=Mon, 14-Sep-2020 11:41:41 GMT',
        'OAuth2AppsTokenDB=e6607fcb-6ac6-41de-a1ff-3caba20437f7; path=/; domain=.vodacom.co.za; Max-Age=10800; Expires=Mon, 14-Sep-2020 11:41:41 GMT'
      ],
      'x-xss-protection': '1; mode=block',
      pragma: 'no-cache',
      'x-frame-options': 'DENY',
      'x-content-type-options': 'nosniff',
      'x-application-context': 'vod-ms-swagger-combined:devcluster'
    }
  }
};

const success = {
  mock: {
    ok: true,
    status: 200,
    data:
    {
      messages: [],
      result: null,
      successful: false,
      code: 0
    },
    headers: {
      server: 'nginx/1.15.5',
      date: 'Mon, 14 Sep 2020 08:41:41 GMT',
      'content-type': 'application/json;charset=UTF-8',
      'transfer-encoding': 'chunked',
      connection: 'close',
      vary: 'Accept-Encoding',
      expires: '0',
      'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
      'set-cookie': [
        'vod-web-auth-token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAxNTkzMDEsInVzZXJfbmFtZSI6IjI3ODI1MDI2MzE3IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9WRVRUSU5HX01BSCJdLCJqdGkiOiIyY2FmZWE4NS1lZmZmLTRhOGQtYjM1NS02NTM3ZDlmMjZlMzciLCJjbGllbnRfaWQiOiJyZXN0YXBpIiwic2NvcGUiOlsib3BlbmlkIl19.AsxduMHHAmln5EBeE-LJbcAiUKvB5fg8BH_FRFNflG4us3g5rpcY-j1CaUzpTOymPeNuRThWbPFMKgT30vh6KTpmjusCz21GymoGt0_2v4MysYyISMDKTVRNBoBWvCNzn5_htDb3qAeUS3JeQgcbqGfBPb1sbuCC8GA-Tawi9UrqikbdNrn1y842jM_WgCeLAb2CvBjfVJP9fnh9RTJhLUmP5qkT7wHA9DZVAYhhE0FPX3btF8TcyzfFgGidYVnImwZH9ZlRrJVnR9GJNZn4gmynTtt1cD27ilNd72zAS_TQFWP4Kd1kDDEhIoYSADk2QNQKpBteTS1JiKsPLNckVg; path=/; domain=.vodacom.co.za; Max-Age=10800; Expires=Mon, 14-Sep-2020 11:41:41 GMT',
        'OAuth2AppsTokenDB=e6607fcb-6ac6-41de-a1ff-3caba20437f7; path=/; domain=.vodacom.co.za; Max-Age=10800; Expires=Mon, 14-Sep-2020 11:41:41 GMT'
      ],
      'x-xss-protection': '1; mode=block',
      pragma: 'no-cache',
      'x-frame-options': 'DENY',
      'x-content-type-options': 'nosniff',
      'x-application-context': 'vod-ms-swagger-combined:devcluster'
    }
  },
  expected: {
    result:
    {
      messages: [],
      result: null,
      successful: false,
      code: 0,
      webAuthToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAxNTkzMDEsInVzZXJfbmFtZSI6IjI3ODI1MDI2MzE3IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9WRVRUSU5HX01BSCJdLCJqdGkiOiIyY2FmZWE4NS1lZmZmLTRhOGQtYjM1NS02NTM3ZDlmMjZlMzciLCJjbGllbnRfaWQiOiJyZXN0YXBpIiwic2NvcGUiOlsib3BlbmlkIl19.AsxduMHHAmln5EBeE-LJbcAiUKvB5fg8BH_FRFNflG4us3g5rpcY-j1CaUzpTOymPeNuRThWbPFMKgT30vh6KTpmjusCz21GymoGt0_2v4MysYyISMDKTVRNBoBWvCNzn5_htDb3qAeUS3JeQgcbqGfBPb1sbuCC8GA-Tawi9UrqikbdNrn1y842jM_WgCeLAb2CvBjfVJP9fnh9RTJhLUmP5qkT7wHA9DZVAYhhE0FPX3btF8TcyzfFgGidYVnImwZH9ZlRrJVnR9GJNZn4gmynTtt1cD27ilNd72zAS_TQFWP4Kd1kDDEhIoYSADk2QNQKpBteTS1JiKsPLNckVg'
    }
  }
};

const invalidHeaders = {
  mock: {
    ok: true,
    status: 200,
    data:
    {
      messages: [],
      result: null,
      successful: false,
      code: 0
    },
    headers: {
      server: 'nginx/1.15.5',
      date: 'Mon, 14 Sep 2020 08:41:41 GMT',
      'content-type': 'application/json;charset=UTF-8',
      'transfer-encoding': 'chunked',
      connection: 'close',
      vary: 'Accept-Encoding',
      expires: '0',
      'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
      'x-xss-protection': '1; mode=block',
      pragma: 'no-cache',
      'x-frame-options': 'DENY',
      'x-content-type-options': 'nosniff',
      'x-application-context': 'vod-ms-swagger-combined:devcluster'
    }
  }
};

const failure = {
  mock: {
    ok: false,
    status: 401,
    error: {
      response: {
        data:
        {
          messages: [
            {
              message: 'Unauthorized',
              namespace: '',
              key: 'Error Authenticating user:',
              severity: null
            }
          ],
          result: {
            sendAttempts: 0,
            authenticationAttempts: 1
          },
          successful: false,
          code: 0
        }
      }
    },
    headers: {
      server: 'nginx/1.15.5',
      date: 'Mon, 14 Sep 2020 08:41:41 GMT',
      'content-type': 'application/json;charset=UTF-8',
      'transfer-encoding': 'chunked',
      connection: 'close',
      vary: 'Accept-Encoding',
      expires: '0',
      'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
      'set-cookie': [
        'vod-web-auth-token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAxNTkzMDEsInVzZXJfbmFtZSI6IjI3ODI1MDI2MzE3IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9WRVRUSU5HX01BSCJdLCJqdGkiOiIyY2FmZWE4NS1lZmZmLTRhOGQtYjM1NS02NTM3ZDlmMjZlMzciLCJjbGllbnRfaWQiOiJyZXN0YXBpIiwic2NvcGUiOlsib3BlbmlkIl19.AsxduMHHAmln5EBeE-LJbcAiUKvB5fg8BH_FRFNflG4us3g5rpcY-j1CaUzpTOymPeNuRThWbPFMKgT30vh6KTpmjusCz21GymoGt0_2v4MysYyISMDKTVRNBoBWvCNzn5_htDb3qAeUS3JeQgcbqGfBPb1sbuCC8GA-Tawi9UrqikbdNrn1y842jM_WgCeLAb2CvBjfVJP9fnh9RTJhLUmP5qkT7wHA9DZVAYhhE0FPX3btF8TcyzfFgGidYVnImwZH9ZlRrJVnR9GJNZn4gmynTtt1cD27ilNd72zAS_TQFWP4Kd1kDDEhIoYSADk2QNQKpBteTS1JiKsPLNckVg; path=/; domain=.vodacom.co.za; Max-Age=10800; Expires=Mon, 14-Sep-2020 11:41:41 GMT',
        'OAuth2AppsTokenDB=e6607fcb-6ac6-41de-a1ff-3caba20437f7; path=/; domain=.vodacom.co.za; Max-Age=10800; Expires=Mon, 14-Sep-2020 11:41:41 GMT'
      ],
      'x-xss-protection': '1; mode=block',
      pragma: 'no-cache',
      'x-frame-options': 'DENY',
      'x-content-type-options': 'nosniff',
      'x-application-context': 'vod-ms-swagger-combined:devcluster'
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
  unauthorized,
  success,
  invalidHeaders,
  failure
};
