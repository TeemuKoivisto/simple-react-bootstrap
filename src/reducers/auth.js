import { fromJS } from 'immutable'

import { LOG_IN } from '../actions/auth'

const INITIAL_STATE = fromJS({
  user: undefined,
  token: '',
  expires: 0,
})

export default function (state: Object = INITIAL_STATE, action: Object) {
  switch (action.type) {
    case LOG_IN + '_SUCCESS':
      return state.merge({
        user: action.payload.user,
        token: action.payload.token,
        expires: action.payload.expires,
      })
    default:
      return state
  }
}