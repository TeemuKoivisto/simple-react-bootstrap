import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logIn, logOut } from '../../actions/auth'

class NavBarContainer extends Component {

  state = {
    showDropDownMenu: false
  }

  toggleDropDownMenu = () => {
    this.setState({
      showDropDownMenu: !this.state.showDropDownMenu
    })
  }

  render() {
    const { showDropDownMenu } = this.state
    const { user } = this.props
    return (
      <header>
        <nav id="navigation" className="navbar" role="navigation">
          <div className="navbar-inner">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" onClick={this.toggleDropDownMenu}>
                <span className="sr-only">Toggle navigation</span>
                <i className="fa fa-bars fa-2x"></i>
              </button>
              <a id="brand" className="clearfix navbar-brand" href="/" alt="logo"><img className="nav-logo-size" src="/static/img/logo.png" /></a>
            </div>
            <div id="navbar-collapse" className={showDropDownMenu ? "navbar-collapse" : "navbar-collapse collapse"}>
              <ul className="nav navbar-nav navbar-right">
                <li></li>
                <li><Link to="/">Front Page</Link></li>
                <li></li>
                <li><Link to="/user-account">User Account</Link></li>
                <li></li>
                <li><a href="https://twitter.com"><i className="fa fa-twitter-square large"></i></a></li>
                <li><a href="https://www.facebook.com"><i className="fa fa-facebook-square large"></i></a></li>
                <li></li>
                <li><a className="" href="#/login">Log in</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  const auth_r = state.get('auth')
  const user = auth_r.get('user') ? auth_r.get('user').toJS() : undefined
  return {
    user,
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
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)