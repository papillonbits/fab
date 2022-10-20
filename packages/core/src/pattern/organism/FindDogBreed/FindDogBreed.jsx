/* eslint-disable react/jsx-no-bind */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../store/action/actionCreators'
import { findDogBreedDefaultProps, findDogBreedPropTypes } from './FindDogBreed.prop'
import { FindAnimalBreed } from '../../molecule/FindAnimalBreed'
import { clientAppStore } from '../../../store/client'
import { setDogRandomImageThunk } from '../../../store/thunk/setRandomImage'

export function Component({ randomImage, searchBreed, apiRestDogSetSearchBreedAction }) {
  function setRandomImage(breed) {
    clientAppStore.dispatch(setDogRandomImageThunk(breed))
  }

  function setSearchBreed(breed) {
    apiRestDogSetSearchBreedAction(breed)
  }

  return (
    <FindAnimalBreed
      buttonText="Search Dog"
      randomImage={randomImage}
      setRandomImage={setRandomImage}
      searchBreed={searchBreed}
      setSearchBreed={setSearchBreed}
    />
  )
}

Component.defaultProps = findDogBreedDefaultProps

Component.propTypes = findDogBreedPropTypes

export const FindDogBreed = connect(
  ({ api }) => ({
    randomImage: api.rest.dog.randomImage,
    searchBreed: api.rest.dog.searchBreed,
  }),
  (dispatch) => bindActionCreators(actionCreators, dispatch),
)(Component)
