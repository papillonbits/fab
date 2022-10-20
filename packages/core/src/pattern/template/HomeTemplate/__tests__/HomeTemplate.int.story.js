import { Provider } from 'react-redux'
import { getAppMockStore } from '@papillonbits/library/store'
import { withTests } from '@storybook/addon-jest'
import { HomeTemplate } from '../index'
import { mockAppState } from '../../../../state/mock'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Patttern/Template/HomeTemplate',
  component: HomeTemplate,
  decorators: [withTests({ results })],
  parameters: { jest: ['HomeTemplate.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <HomeTemplate />
    </Provider>
  )
}
