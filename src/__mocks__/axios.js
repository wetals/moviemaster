const defaultResponse = { data: {} };

const __mock = {
  reset() {
    Object.assign(__mock.instance, {
      getConfig: jest.fn(() => Promise.resolve(defaultResponse)),
      getLatestMovies: jest.fn(() => Promise.resolve(defaultResponse)),
      getGenres: jest.fn(() => Promise.resolve(defaultResponse)),
      getMoviesData: jest.fn(() => Promise.resolve(defaultResponse))
    });
  },
  instance: {}
};

__mock.reset();

module.exports = {
  __mock,
  create() {
    return __mock.instance;
  }
};
