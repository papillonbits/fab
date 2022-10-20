import { withTests } from '@storybook/addon-jest'
import { FindAnimalBreed } from '../index'
import { dogRandomImage, catRandomImage } from '../../../atom/Image/__tests__/Image.int.story'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Patttern/Molecule/FindAnimalBreed',
  component: FindAnimalBreed,
  decorators: [withTests({ results })],
  parameters: { jest: ['FindAnimalBreed.int.test.js'] },
  excludeStories: ['custom'],
}

export function findDogBreed() {
  return (
    <FindAnimalBreed
      buttonText="Search Dog"
      randomImage={dogRandomImage}
      setRandomImage={() => {}}
      searchBreed="some-search-breed"
      setSearchBreed={() => {}}
    />
  )
}

export function findCatBreed() {
  return (
    <FindAnimalBreed
      buttonText="Search Cat"
      randomImage={catRandomImage}
      setRandomImage={() => {}}
      searchBreed="some-search-breed"
      setSearchBreed={() => {}}
    />
  )
}
