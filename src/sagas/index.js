import { all, fork, call, put, select, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { getToken } from '../selectors'

function createRequest(request, token) {
  return axios({
    method: request.method,
    url: process.env.REACT_APP_API_URL + request.url,
    data: request.data,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
  })
}

function* callApi(action) {
  yield put({ type: `${action.type}_REQUEST` })
  try {
    const token = yield select(getToken)
    const result = yield call(createRequest, action.payload.request, token)
    yield put({ type: `${action.type}_SUCCESS`, payload: result.data })
  } catch (err) {
    yield put({ type: `${action.type}_FAIL`, payload: err.response })
  }
}

function* handleRequest(action) {
  yield takeEvery((action => action.payload && action.payload.request), callApi)
}

export default function* root() {
  yield all([
    fork(handleRequest)
  ])
}