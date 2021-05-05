const mockParams = {
  query:
  {
    docType: 'PASSPORT'
  },
  pathParams:
  {
    idNumber: 'C3DUATOO251'
  }
};

const success = {
  mock: {
    ok: true,
    status: 200,
    data:
      [
        '063***4014',
        '063***7038'
      ]
  },
  expected: {
    result:
      [
        '063***4014',
        '063***7038'
      ]
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
