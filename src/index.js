import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import tasksReducer from "./reducers/tasks";
import TodoApp from "./components/TodoApp";
import { createStore } from "redux";

const store = createStore(tasksReducer);

function renderApp(store) {
  ReactDOM.render(<TodoApp store={store} />, document.getElementById("root"));
}

store.subscribe(() => renderApp(store));
renderApp(store);

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
