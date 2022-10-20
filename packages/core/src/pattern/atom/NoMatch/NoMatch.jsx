import { noMatchDefaultProps, noMatchPropTypes } from './NoMatch.prop'

export function NoMatch({ className }) {
  return (
    <div className={className}>
      <h3>{`No match for route. Return to `}</h3>
    </div>
  )
}

NoMatch.defaultProps = noMatchDefaultProps

NoMatch.propTypes = noMatchPropTypes
