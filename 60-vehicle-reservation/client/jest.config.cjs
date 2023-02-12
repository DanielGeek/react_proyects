module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      "\\.(css|less)$": "jest-css-modules"
    },
    testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
    collectCoverageFrom: ['src/**/*.[jt]s?(x)'],
    coverageReporters: ['text', 'lcov'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  };
  