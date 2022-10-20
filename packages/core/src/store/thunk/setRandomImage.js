import { apiRestDogSetRandomImageAction, apiRestCatSetRandomImageAction } from '../action/actionCreators'
import { getRandomDogImageByBreed } from '../../api/rest/dog/image'
import { getRandomCatImageByBreed } from '../../api/rest/cat/image'
import { placeholderURL, defaultBreed, httpResponseCode } from '../../library/constant'

export const setDogRandomImageThunk = (breed) => async (dispatch) => {
  const restDogAPIResponseData = await getRandomDogImageByBreed(breed)
  const dogImageUrl = restDogAPIResponseData.code === httpResponseCode.notFound ? placeholderURL : restDogAPIResponseData.message

  dispatch(
    apiRestDogSetRandomImageAction({
      message: dogImageUrl,
      breed: dogImageUrl === placeholderURL ? defaultBreed.unknown : breed,
    }),
  )
}

export const setCatRandomImageThunk = (breed) => async (dispatch) => {
  const restCatAPIResponseData = await getRandomCatImageByBreed(breed)
  const catImageUrl = !restCatAPIResponseData[0] ? placeholderURL : restCatAPIResponseData[0].url

  dispatch(
    apiRestCatSetRandomImageAction({
      message: catImageUrl,
      breed: catImageUrl === placeholderURL ? defaultBreed.unknown : breed,
    }),
  )
}
