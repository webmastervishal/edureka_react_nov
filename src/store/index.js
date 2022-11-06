import { createStore, combineReducers } from "redux";
import currencyReducer from "./../currency/reducer";
import counterReducer from "./../counter/reducer";

const rootReducer = combineReducers({
  currency: currencyReducer,
  counter: counterReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
