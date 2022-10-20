import { string, func } from 'prop-types'

export const buttonDefaultProps = {}

export const buttonPropTypes = {
  text: string.isRequired,
  setRandomImage: func.isRequired,
  searchBreed: string.isRequired,
}
