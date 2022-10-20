import { withTests } from '@storybook/addon-jest'
import { NoMatch } from '../NoMatch'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Atom/NoMatch',
  component: NoMatch,
  decorators: [withTests({ results })],
  parameters: { jest: ['NoMatch.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <NoMatch
      location={{
        pathname: 'some-path-name',
      }}
    />
  )
}
