import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Container from "./counter/Container";
import FormElements from "./FormElements";
import Login from "./pages/Login";
import AppRouter from "./routes/AppRouter";
import store from "./store";
import { Provider } from "react-redux";
import { UserContextProvider } from "./context/UserContext";

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <AppRouter />
      </UserContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
