import { call, put, takeEvery } from "redux-saga/effects";
import Cookies from "js-cookie";

function* fetchAPI() {
  const res = yield fetch(
    "https://webmaster-fake-api.herokuapp.com/currencies",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }
  );
  const result = yield res.json();
  return result;
}

//worker saga
function* fetchCurrencies() {
  //will have actual logic
  console.log("inside worker saga");

  const result = yield call(fetchAPI);
  console.log("result", result);

  yield put({
    type: "STORE_CURRENCIES",
    payload: result,
  });
}

//watcher saga
export default function* watcherSaga() {
  //listent to actions getting dispatched
  yield takeEvery("FETCH_CURRENCIES", fetchCurrencies);
}
