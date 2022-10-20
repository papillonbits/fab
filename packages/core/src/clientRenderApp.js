/* eslint-disable import/no-import-module-exports */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { checkAccessibilityIssues } from '@papillonbits/library/a11y'
import { homePageRoute, notFoundPageRoute } from './route'
import { ErrorBoundary } from './pattern/atom/ErrorBoundary'
import { clientAppStore } from './store/client'

checkAccessibilityIssues(React, ReactDOM, 1000)

export function App() {
  return (
    <ErrorBoundary>
      <Provider store={clientAppStore}>
        <BrowserRouter>
          <Routes>
            <Route path={homePageRoute.path} element={homePageRoute.clientComponent()} />
            <Route path="*" element={notFoundPageRoute.clientComponent()} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

/* istanbul ignore next */
function renderApp() {
  checkAccessibilityIssues(React, ReactDOM, 1000)

  ReactDOM.createRoot(document.getElementById('app')).render(<App />)

  if (module.hot) {
    module.hot.accept()
  }
}

renderApp()
