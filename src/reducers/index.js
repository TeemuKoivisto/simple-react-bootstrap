import { combineReducers } from 'redux-immutablejs'
import auth from './auth'

import { LOG_OUT } from '../actions/auth'

const combinedReducers = combineReducers({
  auth,
})

/**
 * Flushes all the states from the reducers when user logs out.
 * @param {*} state 
 * @param {*} action 
 */
const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    return combinedReducers(undefined, action)
  }
  return combinedReducers(state, action)
}

export default rootReducer