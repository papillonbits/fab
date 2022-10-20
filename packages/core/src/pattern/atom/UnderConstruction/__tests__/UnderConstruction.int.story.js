import { withTests } from '@storybook/addon-jest'
import { UnderConstruction } from '../UnderConstruction'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Atom/UnderConstruction',
  component: UnderConstruction,
  decorators: [withTests({ results })],
  parameters: { jest: ['UnderConstruction.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <UnderConstruction />
}
