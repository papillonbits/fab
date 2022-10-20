import { combineReducers } from 'redux'
import {
  API_REST_DOG_SET_RANDOM_IMAGE,
  API_REST_DOG_SET_SEARCH_BREED,
  API_REST_CAT_SET_RANDOM_IMAGE,
  API_REST_CAT_SET_SEARCH_BREED,
} from '../action/actionTypes'

export const getAppReducer = () =>
  combineReducers({
    // eslint-disable-next-line default-param-last
    context: (state = {}, action) => {
      switch (action.type) {
        default:
          return state
      }
    },
    // eslint-disable-next-line default-param-last
    api: (state = {}, action) => {
      switch (action.type) {
        case API_REST_DOG_SET_RANDOM_IMAGE:
          return {
            ...state,
            rest: {
              ...state.rest,
              dog: {
                ...state.rest.dog,
                randomImage: {
                  ...state.rest.dog.randomImage,
                  src: action.payload.message,
                  breed: action.payload.breed,
                  subBreed: action.payload.message.replace('https://images.dog.ceo/breeds/', '').split('/')[0],
                },
              },
            },
          }
        case API_REST_DOG_SET_SEARCH_BREED:
          return {
            ...state,
            rest: {
              ...state.rest,
              dog: {
                ...state.rest.dog,
                searchBreed: action.payload,
              },
            },
          }
        case API_REST_CAT_SET_RANDOM_IMAGE:
          return {
            ...state,
            rest: {
              ...state.rest,
              cat: {
                ...state.rest.cat,
                randomImage: {
                  ...state.rest.cat.randomImage,
                  src: action.payload.message,
                  breed: action.payload.breed,
                  subBreed: '',
                },
              },
            },
          }
        case API_REST_CAT_SET_SEARCH_BREED:
          return {
            ...state,
            rest: {
              ...state.rest,
              cat: {
                ...state.rest.cat,
                searchBreed: action.payload,
              },
            },
          }
        default:
          return state
      }
    },
    // eslint-disable-next-line default-param-last
    ui: (state = {}, action) => {
      switch (action.type) {
        default:
          return state
      }
    },
  })
