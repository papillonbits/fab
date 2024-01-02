import { Store } from '../base'

jest.mock('redux', () => ({ applyMiddleware: () => {}, compose: () => {} }))
jest.mock('redux-logger', () => ({ createLogger: () => {} }))
jest.mock('redux-thunk', () => ({ thunk: { someThunk: 'fantastic-thunk' }, withExtraArgument: jest.fn() }))
jest.mock('../../library/environment/host', () => ({ isRunningOnLocalHostViaDomain: true }))

const reduxMockObject = require('redux') // eslint-disable-line
const reduxLoggerMockObject = require('redux-logger')
const reduxThunkMockObject = require('redux-thunk')
const bootstrapAppMockObject = require('../../library/environment/host')

describe('index', () => {
  const createLoggerMockObject = { someLogger: 'some-logger' }

  const createLoggerMockFn = jest.fn(() => createLoggerMockObject)

  beforeEach(() => {
    jest.spyOn(reduxLoggerMockObject, 'createLogger').mockImplementation(createLoggerMockFn)
  })

  afterEach(() => jest.clearAllMocks())

  describe('setMiddlewares()', () => {
    test('must have thunk and logger middleware when running on localhost', () => {
      bootstrapAppMockObject.isRunningOnLocalHostViaDomain = true

      const store = new Store()

      expect(reduxLoggerMockObject.createLogger).toHaveBeenCalledTimes(1)
      expect(store.middlewares).toMatchObject([reduxThunkMockObject.thunk, createLoggerMockObject])
    })

    test('must only have thunk middleware when not running on localhost', () => {
      bootstrapAppMockObject.isRunningOnLocalHostViaDomain = false

      const store = new Store()

      expect(reduxLoggerMockObject.createLogger).not.toHaveBeenCalled()
      expect(store.middlewares).toMatchObject([reduxThunkMockObject.thunk])
    })
  })
})
