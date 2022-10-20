import { withTests } from '@storybook/addon-jest'
import { ErrorBoundary } from '../ErrorBoundary'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Atom/ErrorBoundary',
  component: ErrorBoundary,
  decorators: [withTests({ results })],
  parameters: { jest: ['ErrorBoundary.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <ErrorBoundary>
      <div />
    </ErrorBoundary>
  )
}
