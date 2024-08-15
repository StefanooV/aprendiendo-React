import { lazy, Suspense } from 'react'

import './App.css'
import SearchPage from './pages/Search'

import { Router } from './Router'
import { Route } from './Route'

const LazyHomePage = lazy(() => import('./pages/Home'))
const LazyAboutPage = lazy(() => import('./pages/About'))
const LazyPage404 = lazy(() => import('./pages/404'))

const appRoutes = [ 
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]



function App() {

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={LazyPage404}>
          <Route path='/' Component={LazyHomePage} />  
          <Route path='/about' Component={LazyAboutPage} />  
        </Router>
      </Suspense>
    </main>
  )
}

export default App
