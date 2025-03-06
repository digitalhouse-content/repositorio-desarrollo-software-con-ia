export default {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testMatch: ['**/src/**/*.(test|spec).(js|jsx)'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.css$': 'jest-transform-css'
  }
};