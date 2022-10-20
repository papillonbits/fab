import { string, func } from 'prop-types'
import { imagePropTypes } from '../../atom/Image/Image.prop'

export const findCatBreedDefaultProps = {}

export const findCatBreedPropTypes = {
  randomImage: imagePropTypes.randomImage,
  searchBreed: string.isRequired,
  apiRestCatSetSearchBreedAction: func.isRequired,
}
