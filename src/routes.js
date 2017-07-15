import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FrontPage from './components/frontpage/FrontPage'
// import OtherPage from './components/app/OtherPage'
// import AuthenticatedPage from './components/app/AuthenticatedPage'
// import HiddenPage from './components/app/HiddenPage'

// import NavBar from './components/navbar/NavBar'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='' render={() => 
        <main className="main-container">
          <Route path='/' exact component={FrontPage} />
        </main>
      } />
    </Switch>
  </BrowserRouter>
)