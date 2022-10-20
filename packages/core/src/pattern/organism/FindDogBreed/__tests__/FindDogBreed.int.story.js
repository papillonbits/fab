import { Provider } from 'react-redux'
import { getAppMockStore } from '@papillonbits/library/store'
import { withTests } from '@storybook/addon-jest'
import { FindDogBreed } from '../index'
import { mockAppState } from '../../../../state/mock'
import { dogRandomImage } from '../../../atom/Image/__tests__/Image.int.story'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Patttern/Organism/FindDogBreed',
  component: FindDogBreed,
  decorators: [withTests({ results })],
  parameters: { jest: ['FindDogBreed.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <FindDogBreed randomImage={dogRandomImage} searchBreed="some-search-breed" apiRestCatSetSearchBreedAction={() => {}} />
    </Provider>
  )
}
