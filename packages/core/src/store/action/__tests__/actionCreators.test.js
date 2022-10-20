import {
  apiRestDogSetRandomImageAction,
  apiRestDogSetSearchBreedAction,
  apiRestCatSetRandomImageAction,
  apiRestCatSetSearchBreedAction,
} from '../actionCreators'

describe('actionCreators', () => {
  const payload = { somePayload: 'some-payload' }

  describe('apiRestDogSetRandomImageAction()', () => {
    test('must return action with given payload', () => {
      expect(apiRestDogSetRandomImageAction(payload)).toMatchObject({ type: 'API_REST_DOG_SET_RANDOM_IMAGE', payload })
    })
  })

  describe('apiRestDogSetSearchBreedAction()', () => {
    test('must return action with given payload', () => {
      expect(apiRestDogSetSearchBreedAction(payload)).toMatchObject({ type: 'API_REST_DOG_SET_SEARCH_BREED', payload })
    })
  })

  describe('apiRestCatSetRandomImageAction()', () => {
    test('must return action with given payload', () => {
      expect(apiRestCatSetRandomImageAction(payload)).toMatchObject({ type: 'API_REST_CAT_SET_RANDOM_IMAGE', payload })
    })
  })

  describe('apiRestCatSetSearchBreedAction()', () => {
    test('must return action with given payload', () => {
      expect(apiRestCatSetSearchBreedAction(payload)).toMatchObject({ type: 'API_REST_CAT_SET_SEARCH_BREED', payload })
    })
  })
})
