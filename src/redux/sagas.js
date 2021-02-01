import { all } from "redux-saga/effects";
import posts from './post/sagas';

export default function* rootSaga() {
  yield all([posts()]);
}
