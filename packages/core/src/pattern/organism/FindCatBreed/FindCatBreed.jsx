/* eslint-disable react/jsx-no-bind */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../store/action/actionCreators'
import { findCatBreedDefaultProps, findCatBreedPropTypes } from './FindCatBreed.prop'
import { FindAnimalBreed } from '../../molecule/FindAnimalBreed'
import { clientAppStore } from '../../../store/client'
import { setCatRandomImageThunk } from '../../../store/thunk/setRandomImage'

export function Component({ randomImage, searchBreed, apiRestCatSetSearchBreedAction }) {
  function setRandomImage(breed) {
    clientAppStore.dispatch(setCatRandomImageThunk(breed))
  }

  function setSearchBreed(breed) {
    apiRestCatSetSearchBreedAction(breed)
  }

  return (
    <FindAnimalBreed
      buttonText="Search Cat"
      randomImage={randomImage}
      setRandomImage={setRandomImage}
      searchBreed={searchBreed}
      setSearchBreed={setSearchBreed}
    />
  )
}

Component.defaultProps = findCatBreedDefaultProps

Component.propTypes = findCatBreedPropTypes

export const FindCatBreed = connect(
  ({ api }) => ({
    randomImage: api.rest.cat.randomImage,
    searchBreed: api.rest.cat.searchBreed,
  }),
  (dispatch) => bindActionCreators(actionCreators, dispatch),
)(Component)
