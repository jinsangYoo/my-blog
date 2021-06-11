import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./App";
import createStore from "./store/createStore";

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
