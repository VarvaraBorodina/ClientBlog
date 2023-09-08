const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
