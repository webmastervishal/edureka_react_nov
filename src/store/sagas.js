import { all } from "redux-saga/effects";
import currencySaga from "./../currency/saga";

export default function* rootSagas() {
  yield all([currencySaga()]);
}
