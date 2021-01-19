import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import axios from "axios";

axios.defaults.baseURL = "https://social-chris.herokuapp.com/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
