import { func, string } from 'prop-types'
import { buttonPropTypes } from '../../atom/Button/Button.prop'
import { imagePropTypes } from '../../atom/Image/Image.prop'

export const findAnimalBreedDefaultProps = {}

export const findAnimalBreedPropTypes = {
  buttonText: buttonPropTypes.text,
  randomImage: imagePropTypes.randomImage,
  setRandomImage: func.isRequired,
  searchBreed: string.isRequired,
  setSearchBreed: func.isRequired,
}
