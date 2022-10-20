import { setDogRandomImageThunk, setCatRandomImageThunk } from '../setRandomImage'

jest.mock('../../action/actionCreators', () => ({ apiRestDogSetRandomImageAction: () => {}, apiRestCatSetRandomImageAction: () => {} }))
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

describe('setRandomImage', () => {
  const breed = 'some-breed'
  const actionDataObject = { someActionData: 'some-action-data' }

  const apiRestDogSetRandomImageActionMockFn = jest.fn(() => actionDataObject)
  const apiRestCatSetRandomImageActionMockFn = jest.fn(() => actionDataObject)

  beforeEach(() => {
    jest.spyOn(actionCreatorsMockObject, 'apiRestDogSetRandomImageAction').mockImplementation(apiRestDogSetRandomImageActionMockFn)
    jest.spyOn(actionCreatorsMockObject, 'apiRestCatSetRandomImageAction').mockImplementation(apiRestCatSetRandomImageActionMockFn)
  })

  afterEach(() => jest.clearAllMocks())

  describe('setDogRandomImageThunk()', () => {
    test('must dispatch action when http response success ~ 200', async () => {
      const responseSuccessDataObject = { code: constantMockObject.httpResponseCode.success, message: 'some-message' }
      const apiRestDogSetRandomImageActionSuccessDataObject = { message: responseSuccessDataObject.message, breed }
      const getRandomDogImageByBreedMockFn = jest.fn(() => Promise.resolve(responseSuccessDataObject))

      jest.spyOn(apiRestDogImageMockObject, 'getRandomDogImageByBreed').mockImplementation(getRandomDogImageByBreedMockFn)
      const dispatchSpy = jest.fn()

      await setDogRandomImageThunk(breed)(dispatchSpy)

      await expect(getRandomDogImageByBreedMockFn).toHaveBeenCalledWith(breed)
      await expect(apiRestDogSetRandomImageActionMockFn).toHaveBeenCalledWith(apiRestDogSetRandomImageActionSuccessDataObject)
      await expect(dispatchSpy).toHaveBeenCalledWith(actionDataObject)
    })

    test('must dispatch action when http response not found ~ 404', async () => {
      const responseNotFoundDataObject = { code: constantMockObject.httpResponseCode.notFound, message: 'some-message' }
      const apiRestDogSetRandomImageActionNotFoundDataObject = {
        message: constantMockObject.placeholderURL,
        breed: constantMockObject.defaultBreed.unknown,
      }
      const getRandomDogImageByBreedMockFn = jest.fn(() => Promise.resolve(responseNotFoundDataObject))

      jest.spyOn(apiRestDogImageMockObject, 'getRandomDogImageByBreed').mockImplementation(getRandomDogImageByBreedMockFn)
      const dispatchSpy = jest.fn()

      await setDogRandomImageThunk(breed)(dispatchSpy)

      await expect(getRandomDogImageByBreedMockFn).toHaveBeenCalledWith(breed)
      await expect(apiRestDogSetRandomImageActionMockFn).toHaveBeenCalledWith(apiRestDogSetRandomImageActionNotFoundDataObject)
      await expect(dispatchSpy).toHaveBeenCalledWith(actionDataObject)
    })
  })

  describe('setCatRandomImageThunk()', () => {
    test('must dispatch action when http response success ~ 200', async () => {
      const responseSuccessDataObject = [{ url: 'some-url' }]
      const apiRestCatSetRandomImageActionSuccessDataObject = { message: responseSuccessDataObject[0].url, breed }
      const getRandomCatImageByBreedMockFn = jest.fn(() => Promise.resolve(responseSuccessDataObject))

      jest.spyOn(apiRestCatImageMockObject, 'getRandomCatImageByBreed').mockImplementation(getRandomCatImageByBreedMockFn)
      const dispatchSpy = jest.fn()

      await setCatRandomImageThunk(breed)(dispatchSpy)

      await expect(getRandomCatImageByBreedMockFn).toHaveBeenCalledWith(breed)
      await expect(apiRestCatSetRandomImageActionMockFn).toHaveBeenCalledWith(apiRestCatSetRandomImageActionSuccessDataObject)
      await expect(dispatchSpy).toHaveBeenCalledWith(actionDataObject)
    })

    test('must dispatch action when http response not found ~ 404', async () => {
      const responseNotFoundDataObject = []
      const apiRestCatSetRandomImageActionNotFoundDataObject = {
        message: constantMockObject.placeholderURL,
        breed: constantMockObject.defaultBreed.unknown,
      }
      const getRandomCatImageByBreedMockFn = jest.fn(() => Promise.resolve(responseNotFoundDataObject))

      jest.spyOn(apiRestCatImageMockObject, 'getRandomCatImageByBreed').mockImplementation(getRandomCatImageByBreedMockFn)
      const dispatchSpy = jest.fn()

      await setCatRandomImageThunk(breed)(dispatchSpy)

      await expect(getRandomCatImageByBreedMockFn).toHaveBeenCalledWith(breed)
      await expect(apiRestCatSetRandomImageActionMockFn).toHaveBeenCalledWith(apiRestCatSetRandomImageActionNotFoundDataObject)
      await expect(dispatchSpy).toHaveBeenCalledWith(actionDataObject)
    })
  })
})
