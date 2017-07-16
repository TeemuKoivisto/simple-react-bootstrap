import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FrontPage from './components/frontpage/FrontPage'
import LoginPage from './components/login/LoginPage'
import UserAccountPage from './components/user/UserAccountPage'

import NavBar from './components/navbar/NavBar'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='' render={() => 
        <main className="main-container">
          <NavBar />
          <Route path='/' exact component={FrontPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/user-account' exact component={UserAccountPage} />
        </main>
      } />
    </Switch>
  </BrowserRouter>
)