import { setAppCompleteStateThunk } from '../completeState'

jest.mock('../../action/actionCreators', () => ({
  apiRestDogSetRandomImageAction: () => {},
  apiRestDogSetSearchBreedAction: () => {},
  apiRestCatSetRandomImageAction: () => {},
  apiRestCatSetSearchBreedAction: () => {},
}))
jest.mock('../../../api/rest/dog/image', () => ({ getRandomDogImageByBreed: () => {} }))
jest.mock('../../../api/rest/cat/image', () => ({ getRandomCatImageByBreed: () => {} }))
jest.mock('../../../library/constant', () => ({
  placeholderURL: 'some-placeholder-url',
  defaultBreed: { dog: 'some-dog-breed', cat: 'some-cat-breed', unknown: 'some-unknown-breed' },
  httpResponseCode: { success: 'some-success-code', notFound: 'some-not-found-code' },
}))

const actionCreatorsMockObject = require('../../action/actionCreators')
const apiRestDogImageMockObject = require('../../../api/rest/dog/image')
const apiRestCatImageMockObject = require('../../../api/rest/cat/image')
const constantMockObject = require('../../../library/constant')

describe('completeState', () => {
  const actionDataObject = { someActionData: 'some-action-data' }

  const apiRestDogSetRandomImageActionMockFn = jest.fn(() => actionDataObject)
  const apiRestDogSetSearchBreedActionMockFn = jest.fn(() => actionDataObject)
  const apiRestCatSetRandomImageActionMockFn = jest.fn(() => actionDataObject)
  const apiRestCatSetSearchBreedActionMockFn = jest.fn(() => actionDataObject)

  beforeEach(() => {
    jest.spyOn(actionCreatorsMockObject, 'apiRestDogSetRandomImageAction').mockImplementation(apiRestDogSetRandomImageActionMockFn)
    jest.spyOn(actionCreatorsMockObject, 'apiRestDogSetSearchBreedAction').mockImplementation(apiRestDogSetSearchBreedActionMockFn)
    jest.spyOn(actionCreatorsMockObject, 'apiRestCatSetRandomImageAction').mockImplementation(apiRestCatSetRandomImageActionMockFn)
    jest.spyOn(actionCreatorsMockObject, 'apiRestCatSetSearchBreedAction').mockImplementation(apiRestCatSetSearchBreedActionMockFn)
  })

  afterEach(() => jest.clearAllMocks())

  describe('setAppCompleteStateThunk()', () => {
    test('must dispatch actions when http responses success ~ 200', async () => {
      const dogAPIresponseSuccessDataObject = { code: constantMockObject.httpResponseCode.success, message: 'some-message' }
      const apiRestDogSetRandomImageActionSuccessDataObject = {
        message: dogAPIresponseSuccessDataObject.message,
        breed: constantMockObject.defaultBreed.dog,
      }
      const getRandomDogImageByBreedMockFn = jest.fn(() => Promise.resolve(dogAPIresponseSuccessDataObject))

      const catAPIresponseSuccessDataObject = [{ url: 'some-url' }]
      const apiRestCatSetRandomImageActionSuccessDataObject = {
        message: catAPIresponseSuccessDataObject[0].url,
        breed: constantMockObject.defaultBreed.cat,
      }
      const getRandomCatImageByBreedMockFn = jest.fn(() => Promise.resolve(catAPIresponseSuccessDataObject))

      jest.spyOn(apiRestDogImageMockObject, 'getRandomDogImageByBreed').mockImplementation(getRandomDogImageByBreedMockFn)
      jest.spyOn(apiRestCatImageMockObject, 'getRandomCatImageByBreed').mockImplementation(getRandomCatImageByBreedMockFn)
      const dispatchSpy = jest.fn()

      await setAppCompleteStateThunk()(dispatchSpy)

      await expect(getRandomDogImageByBreedMockFn).toHaveBeenCalledWith(constantMockObject.defaultBreed.dog)
      await expect(apiRestDogSetRandomImageActionMockFn).toHaveBeenCalledWith(apiRestDogSetRandomImageActionSuccessDataObject)
      await expect(dispatchSpy).toHaveBeenCalledWith(actionDataObject)

      await expect(getRandomCatImageByBreedMockFn).toHaveBeenCalledWith(constantMockObject.defaultBreed.cat)
      await expect(apiRestCatSetRandomImageActionMockFn).toHaveBeenCalledWith(apiRestCatSetRandomImageActionSuccessDataObject)
      await expect(dispatchSpy).toHaveBeenCalledWith(actionDataObject)
    })

    test('must dispatch actions when http responses not found ~ 404', async () => {
      const dogAPIresponseSuccessDataObject = { code: constantMockObject.httpResponseCode.notFound, message: 'some-message' }
      const apiRestDogSetRandomImageActionSuccessDataObject = {
        message: constantMockObject.placeholderURL,
        breed: constantMockObject.defaultBreed.unknown,
      }
      const getRandomDogImageByBreedMockFn = jest.fn(() => Promise.resolve(dogAPIresponseSuccessDataObject))

      const catAPIresponseSuccessDataObject = []
      const apiRestCatSetRandomImageActionSuccessDataObject = {
        message: constantMockObject.placeholderURL,
        breed: constantMockObject.defaultBreed.unknown,
      }
      const getRandomCatImageByBreedMockFn = jest.fn(() => Promise.resolve(catAPIresponseSuccessDataObject))

      jest.spyOn(apiRestDogImageMockObject, 'getRandomDogImageByBreed').mockImplementation(getRandomDogImageByBreedMockFn)
      jest.spyOn(apiRestCatImageMockObject, 'getRandomCatImageByBreed').mockImplementation(getRandomCatImageByBreedMockFn)
      const dispatchSpy = jest.fn()

      await setAppCompleteStateThunk()(dispatchSpy)

      await expect(getRandomDogImageByBreedMockFn).toHaveBeenCalledWith(constantMockObject.defaultBreed.dog)
      await expect(apiRestDogSetRandomImageActionMockFn).toHaveBeenCalledWith(apiRestDogSetRandomImageActionSuccessDataObject)
      await expect(dispatchSpy).toHaveBeenCalledWith(actionDataObject)

      await expect(getRandomCatImageByBreedMockFn).toHaveBeenCalledWith(constantMockObject.defaultBreed.cat)
      await expect(apiRestCatSetRandomImageActionMockFn).toHaveBeenCalledWith(apiRestCatSetRandomImageActionSuccessDataObject)
      await expect(dispatchSpy).toHaveBeenCalledWith(actionDataObject)
    })
  })
})
