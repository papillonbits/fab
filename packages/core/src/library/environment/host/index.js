export const isRunningOnLocalHostViaPort = process.env.PORT === '3000'

export const isRunningOnLocalHostViaDomain = typeof window !== 'undefined' && window.location.href.includes('localhost')

export const isRunningOnGitHubPages = process.env.BASE_URL === '/fable' && window.location.href.includes('papillonbits.github.io/fable/')
