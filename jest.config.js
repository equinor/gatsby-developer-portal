module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/fileMock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFilesAfterEnv: ["./src/setupTests.js"],
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  collectCoverage: true,
  coverageDirectory: './coverage',
  collectCoverageFrom: ["./src/**"]
};
