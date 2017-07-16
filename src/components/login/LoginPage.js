import React, { Component } from 'react'

import { connect } from 'react-redux'
import { logIn } from '../../actions/auth'

class LoginPage extends Component {

  logIn = () => {
    this.props.logIn('admin@asdf.asdf', 'asdf')
  }

  logOut = () => {
    this.props.logOut()
  }

  render() {
    const { user, loginState } = this.props
    return (
      <div>
        <h1>Log in</h1>
        { loginState === 'request' ?
          <p>Loading...</p>
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
    loginState: auth_r.get('loginState'),
  }
}

const mapDispatchToProps = (dispatch) => ({
  logIn(email, password) {
    dispatch(logIn({
      email,
      password
    }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)