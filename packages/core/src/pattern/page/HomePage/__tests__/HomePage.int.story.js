import { Provider } from 'react-redux'
import { getAppMockStore } from '@papillonbits/library/store'
import { withTests } from '@storybook/addon-jest'
import { AsyncHomePage, HomePage } from '../index'
import { mockAppState } from '../../../../state/mock'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Patttern/Page/HomePage',
  component: HomePage,
  decorators: [withTests({ results })],
  parameters: { jest: ['HomePage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <AsyncHomePage />
    </Provider>
  )
}

export function regular() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <HomePage />
    </Provider>
  )
}
