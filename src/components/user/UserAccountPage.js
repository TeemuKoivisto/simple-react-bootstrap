import React, { Component } from 'react'

import { connect } from 'react-redux'

class UserAccountPage extends Component {

  render() {
    const { user } = this.props
    return (
      <div>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAccountPage)