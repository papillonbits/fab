import { string, func } from 'prop-types'
import { imagePropTypes } from '../../atom/Image/Image.prop'

export const findDogBreedDefaultProps = {}

export const findDogBreedPropTypes = {
  randomImage: imagePropTypes.randomImage,
  searchBreed: string.isRequired,
  apiRestDogSetSearchBreedAction: func.isRequired,
}
