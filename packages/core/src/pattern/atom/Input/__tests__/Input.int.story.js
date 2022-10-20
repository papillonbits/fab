import { withTests } from '@storybook/addon-jest'
import { Input } from '../index'
import { dogRandomImage } from '../../Image/__tests__/Image.int.story'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Patttern/Atom/Input',
  component: Input,
  decorators: [withTests({ results })],
  parameters: { jest: ['Input.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Input randomImage={dogRandomImage} setRandomImage={() => {}} setSearchBreed={() => {}} />
}
