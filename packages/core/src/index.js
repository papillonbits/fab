/* eslint global-require: 0 */

import './index.scss'
import { isRunningOnLocalHostViaDomain, isRunningOnGitHubPages } from './library/environment/host'
import { getAppDefaultStateFromData } from './state/default'

require('@babel/register')({
  extensions: ['.js', '.jsx'],
  ignore: [],
})

require('whatwg-fetch')

if (isRunningOnLocalHostViaDomain || isRunningOnGitHubPages) {
  window.appDefaultState = getAppDefaultStateFromData({
    isRunningOnLocalHostViaDomain,
    isRunningOnGitHubPages,
    isRunningOnHeroku: false,
  })
}

require('./clientRenderApp')
