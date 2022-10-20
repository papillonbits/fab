import {
  apiRestDogSetRandomImageAction,
  apiRestDogSetSearchBreedAction,
  apiRestCatSetRandomImageAction,
  apiRestCatSetSearchBreedAction,
} from '../action/actionCreators'
import { getRandomDogImageByBreed } from '../../api/rest/dog/image'
import { getRandomCatImageByBreed } from '../../api/rest/cat/image'
import { placeholderURL, defaultBreed, httpResponseCode } from '../../library/constant'

export const setAppCompleteStateThunk = () => async (dispatch) => {
  const restDogAPIResponseData = await getRandomDogImageByBreed(defaultBreed.dog)
  const dogImageUrl = restDogAPIResponseData.code === httpResponseCode.notFound ? placeholderURL : restDogAPIResponseData.message

  dispatch(
    apiRestDogSetRandomImageAction({
      message: dogImageUrl,
      breed: dogImageUrl === placeholderURL ? defaultBreed.unknown : defaultBreed.dog,
    }),
  )

  dispatch(apiRestDogSetSearchBreedAction(defaultBreed.dog))

  const restCatAPIResponseData = await getRandomCatImageByBreed(defaultBreed.cat)
  const catImageUrl = !restCatAPIResponseData[0] ? placeholderURL : restCatAPIResponseData[0].url

  dispatch(
    apiRestCatSetRandomImageAction({
      message: catImageUrl,
      breed: dogImageUrl === placeholderURL ? defaultBreed.unknown : defaultBreed.cat,
    }),
  )

  dispatch(apiRestCatSetSearchBreedAction(defaultBreed.cat))
}
