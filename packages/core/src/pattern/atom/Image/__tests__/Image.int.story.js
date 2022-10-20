import { withTests } from '@storybook/addon-jest'
import { Image } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Patttern/Atom/Image',
  component: Image,
  decorators: [withTests({ results })],
  parameters: { jest: ['Image.int.test.js'] },
  excludeStories: ['custom'],
}

export const dogRandomImage = {
  src: 'https://images.dog.ceo/breeds/collie-border/n02106166_1031.jpg',
  alt: 'collie',
  breed: 'collie',
}

export const catRandomImage = {
  src: 'https://66.media.tumblr.com/tumblr_m4iejdP8Hb1qd477zo1_250.jpg',
  alt: 'beng',
  breed: 'beng',
}

export function dogImage() {
  return <Image randomImage={dogRandomImage} />
}

export function catImage() {
  return <Image randomImage={catRandomImage} />
}
