import React, { Component } from 'react'
import logo from './logo.svg'
import './FrontPage.css'

import { connect } from 'react-redux'
import { logIn, logOut } from '../../actions/auth'

class FrontPage extends Component {

  logIn = () => {
    this.props.logIn('admin@asdf.asdf', 'asdf')
  }

  logOut = () => {
    this.props.logOut()
  }

  render() {
    const { user } = this.props
    return (
      <div className="FrontPage">
        <div className="FrontPage-header">
          <img src={logo} className="FrontPage-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="FrontPage-intro">
          To get started, edit <code>src/FrontPage.js</code> and save to reload.
        </p>
        { user ?
        <button onClick={this.logOut}>Log out</button>
          :
        <button onClick={this.logIn}>Log in</button>
        }
        <p>
          { user ? `Hello ${user.get('firstname')} ${user.get('lastname')}` : "" }
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const auth_r = state.get('auth')
  return {
    user: auth_r.get('user'),
  }
}

const mapDispatchToProps = (dispatch) => ({
  logIn(email, password) {
    dispatch(logIn({
      email,
      password
    }))
  },
  logOut() {
    dispatch(logOut())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage)