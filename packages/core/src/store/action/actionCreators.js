import {
  API_REST_DOG_SET_RANDOM_IMAGE,
  API_REST_DOG_SET_SEARCH_BREED,
  API_REST_CAT_SET_RANDOM_IMAGE,
  API_REST_CAT_SET_SEARCH_BREED,
} from './actionTypes'

export const apiRestDogSetRandomImageAction = (payload) => ({ type: API_REST_DOG_SET_RANDOM_IMAGE, payload })
export const apiRestDogSetSearchBreedAction = (payload) => ({ type: API_REST_DOG_SET_SEARCH_BREED, payload })
export const apiRestCatSetRandomImageAction = (payload) => ({ type: API_REST_CAT_SET_RANDOM_IMAGE, payload })
export const apiRestCatSetSearchBreedAction = (payload) => ({ type: API_REST_CAT_SET_SEARCH_BREED, payload })
