import { findDogBreed, findCatBreed } from './FindAnimalBreed.int.story'

jest.mock('../../../../store/thunk/setRandomImage', () => ({ setDogRandomImageThunk: () => {}, setCatRandomImageThunk: () => {} }))

describe('<FindAnimalBreed />', () => {
  describe('Render', () => {
    test('must match findDogBreed', () => {
      expect(global.renderToJSON(findDogBreed())).toMatchSnapshot()
    })

    test('must match findCatBreed', () => {
      expect(global.renderToJSON(findCatBreed())).toMatchSnapshot()
    })
  })
})
