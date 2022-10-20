import { Link } from 'react-router-dom'
import { homePagePath } from '../../../route/path'
import { NoMatch } from '../../atom/NoMatch'
import { notFoundTemplateDefaultProps, notFoundTemplatePropTypes } from './NotFoundTemplate.prop'

export function NotFoundTemplate({ className }) {
  return (
    <div className={className}>
      <h2>Not Found</h2>
      <NoMatch />
      <Link to={homePagePath}> Back to Home Page</Link>
    </div>
  )
}

NotFoundTemplate.defaultProps = notFoundTemplateDefaultProps

NotFoundTemplate.propTypes = notFoundTemplatePropTypes
