import { withTests } from '@storybook/addon-jest'
import { Button } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Patttern/Atom/Button',
  component: Button,
  decorators: [withTests({ results })],
  parameters: { jest: ['Button.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Button text="Find" setRandomImage={() => {}} searchBreed="some-search-breed" />
}
