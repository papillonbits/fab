import { regular } from './NoMatch.int.story'

describe('<NoMatch />', () => {
  describe('Render', () => {
    test('must match regular', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
