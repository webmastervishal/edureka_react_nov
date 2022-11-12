import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import currencyReducer from "./../currency/reducer";
import rootSagas from "./sagas";
// import counterReducer from "./../counter/reducer";

const rootReducer = combineReducers({
  currency: currencyReducer,
  // counter: counterReducer,
});

const sagaMiddleware = createSagaMiddleware();

const enhancedComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  enhancedComposer(applyMiddleware(sagaMiddleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSagas);

export default store;
