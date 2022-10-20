import { dogImage, catImage } from './Image.int.story'

describe('<Image />', () => {
  describe('Render', () => {
    test('must match dogImage', () => {
      expect(global.renderToJSON(dogImage())).toMatchSnapshot()
    })

    test('must match catImage', () => {
      expect(global.renderToJSON(catImage())).toMatchSnapshot()
    })
  })
})
