import { HomeTemplate } from '../../template/HomeTemplate'
import { homePageDefaultProps, homePagePropTypes } from './HomePage.prop'

export function HomePage() {
  return <HomeTemplate />
}

HomePage.defaultProps = homePageDefaultProps

HomePage.propTypes = homePagePropTypes

// Default export is required to use with React.lazy()
export default HomePage
