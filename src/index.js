import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import tasksReducer from "./reducers/tasks";
import TodoApp from "./containers/TodoApp";
import { createStore } from "redux";

const store = createStore(tasksReducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
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
