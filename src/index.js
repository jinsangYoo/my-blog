import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

const initialState = {
  task: "",
  tasks: [],
};

const inputTask = (task) => ({
  type: "INPUT_TASK",
  payload: {
    task,
  },
});

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case "INPUT_TASK":
      return {
        ...state,
        task: action.payload.task,
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task]),
      };
    default:
      return state;
  }
}

const store = createStore(tasksReducer);

const addTask = (task) => ({
  type: "ADD_TASK",
  payload: {
    task,
  },
});

function TodoApp({ store }) {
  console.log(JSON.stringify(store.getState()));
  const { task, tasks } = store.getState();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => store.dispatch(inputTask(e.target.value))}
      />
      <input
        type="button"
        value="add"
        onClick={() => store.dispatch(addTask(task))}
      />
      <ul>
        {tasks.map(function (item, i) {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

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
