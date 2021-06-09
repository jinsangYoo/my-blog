import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import TodoApp from "./containers/TodoApp";
import { ConnectedRouter } from "react-router-redux";
import createBrowserHistory from "history/createBrowserHistory";
import Error from "./components/Error";
import createStore from "./store";

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={TodoApp} />
        <Route path="/error" component={Error} />
      </div>
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
