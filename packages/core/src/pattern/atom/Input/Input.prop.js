import { object, func } from 'prop-types'

export const inputDefaultProps = {}

export const inputPropTypes = {
  randomImage: object.isRequired,
  setRandomImage: func.isRequired,
  setSearchBreed: func.isRequired,
}
