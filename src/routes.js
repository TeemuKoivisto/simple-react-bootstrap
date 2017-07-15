import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FrontPage from './components/frontpage/FrontPage'
import UserAccountPage from './components/user/UserAccountPage'
// import OtherPage from './components/app/OtherPage'
// import AuthenticatedPage from './components/app/AuthenticatedPage'
// import HiddenPage from './components/app/HiddenPage'

import NavBar from './components/navbar/NavBar'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='' render={() => 
        <main className="main-container">
          <NavBar />
          <Route path='/' exact component={FrontPage} />
          <Route path='/user-account' exact component={UserAccountPage} />
        </main>
      } />
    </Switch>
  </BrowserRouter>
)