import React from 'react'
import { homePageDefaultProps, homePagePropTypes } from './HomePage.prop'

const LazyHomePage = React.lazy(() => import('./HomePage'))

export function AsyncHomePage() {
  return (
    <React.Suspense fallback={null}>
      <LazyHomePage />
    </React.Suspense>
  )
}

AsyncHomePage.defaultProps = homePageDefaultProps

AsyncHomePage.propTypes = homePagePropTypes
