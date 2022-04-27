import { all, takeEvery, put } from "redux-saga/effects";
import helper from "../../utils/helper";
import * as actionTypes from "../actions/loginTypes";

function* watchLogin(payload) {
  helper.storageSave("login", payload.payload);
  const { history, username, password } = payload.payload;
  history.push("/dashboard");
  try {
    yield put({ type: actionTypes.LOG_IN_SUCCESS, payload: {username, password} });
  } catch (e) {
    yield put({ type: actionTypes.LOG_IN_FAILED, payload: e });
  }
}

function* watchCheckLogin() {
  const items = yield helper.storageGet("login");
  try {
    if (items) {
      yield put({ type: actionTypes.LOG_IN_SUCCESS, payload: items });
    }
  } catch (e) {
    yield put({ type: actionTypes.LOG_IN_FAILED, payload: e });
  }
}

export default function* watchLoginSaga() {
  yield all([
    takeEvery(actionTypes.LOG_IN, watchLogin),
    takeEvery(actionTypes.CHECK_LOGIN, watchCheckLogin),
]);
}
