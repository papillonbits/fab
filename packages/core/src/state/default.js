import {
  isRunningOnLocalHostViaDomain as isRunningOnLocalHostViaDomainDefault,
  isRunningOnGitHubPages as isRunningOnGitHubPagesDefault,
} from '../library/environment/host'
import { placeholderURL } from '../library/constant'

export function getAppDefaultStateFromWindow() {
  return window.appDefaultState
}

export function getAppDefaultStateFromData({ isRunningOnLocalHost, isRunningOnGitHubPages, isRunningOnHeroku }) {
  return {
    context: {
      isRunningOnLocalHost: isRunningOnLocalHost || isRunningOnLocalHostViaDomainDefault,
      isRunningOnGitHubPages: isRunningOnGitHubPages || isRunningOnGitHubPagesDefault,
      isRunningOnHeroku,
    },
    api: {
      rest: {
        dog: {
          randomImage: {
            src: placeholderURL,
            alt: 'random',
          },
        },
        cat: {
          randomImage: {
            src: placeholderURL,
            alt: 'random',
          },
        },
      },
    },
    ui: {},
  }
}
