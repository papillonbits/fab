// https://docs.codecov.com/docs/codecov-uploader
/* eslint-disable prefer-destructuring */
const getJestSetup = require('@papillonbits/setup/jest').getJestSetup

const testPathIgnorePatterns = process.env.NODE_ENV === 'test' ? ['packages/core/webpack/webpack.test.babel.js'] : ['packages/core']
const coverageDirectory = './.coverage/'
const collectCoverage = true
const collectCoverageFrom = [
  '!**/.coverage/**',
  '!**/.husky/**',
  '!**/.mock/**',
  '!**/.storybook/**',
  '!**/.storybook-static/**',
  '!**/node_modules/**',
  'packages/**/*.{js,jsx}',
  '!packages/**/index.js',
  '!packages/**/*.prop.js',
  '!packages/**/*.story.js',
  '!packages/**/*.test.js',
  '!packages/**/build/**',
  '!packages/**/node_modules/**',
  '!packages/**/webpack*',
]
const coverageThreshold = {
  global: {
    statements: 66,
    branches: 87,
    functions: 57,
    lines: 64,
  },
}

module.exports = getJestSetup({ testPathIgnorePatterns, coverageDirectory, collectCoverage, collectCoverageFrom, coverageThreshold })
