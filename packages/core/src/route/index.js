import { AsyncHomePage, HomePage } from '../pattern/page/HomePage'
import { AsyncNotFoundPage, NotFoundPage } from '../pattern/page/NotFoundPage'
import { homePagePath } from './path'

export const homePageRoute = {
  path: homePagePath,
  exact: true,
  clientComponent: AsyncHomePage,
  serverComponent: HomePage,
}

export const notFoundPageRoute = {
  clientComponent: AsyncNotFoundPage,
  serverComponent: NotFoundPage,
}
