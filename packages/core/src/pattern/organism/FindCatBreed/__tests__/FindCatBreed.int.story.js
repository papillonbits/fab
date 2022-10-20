import { Provider } from 'react-redux'
import { getAppMockStore } from '@papillonbits/library/store'
import { withTests } from '@storybook/addon-jest'
import { FindCatBreed } from '../index'
import { mockAppState } from '../../../../state/mock'
import { catRandomImage } from '../../../atom/Image/__tests__/Image.int.story'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Patttern/Organism/FindCatBreed',
  component: FindCatBreed,
  decorators: [withTests({ results })],
  parameters: { jest: ['FindCatBreed.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <FindCatBreed randomImage={catRandomImage} searchBreed="some-search-breed" apiRestCatSetSearchBreedAction={() => {}} />
    </Provider>
  )
}
