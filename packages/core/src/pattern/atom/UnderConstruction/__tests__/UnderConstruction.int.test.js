import { regular } from './UnderConstruction.int.story'

describe('<UnderConstruction />', () => {
  describe('Render', () => {
    test('must match regular', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
