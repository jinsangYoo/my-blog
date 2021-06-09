import {
  // 이름 충돌이 일어나므로 별칭으로 임포트
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import logger from "redux-logger";
import tasksReducer from "../reducers/tasks";

const customLogger = (store) => (next) => (action) => {
  console.log(JSON.stringify(store.getState()));

  console.log(JSON.stringify(action));
  const result = next(action);

  console.log(JSON.stringify(store.getState()));
  console.log("--------------------");

  return result;
};

const storageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  window.localStorage.setItem("app-state", JSON.stringify(store.getState()));
  return result;
};

const middlewares = [logger];
// const savedState = JSON.stringify(localStorage.getItem("app-state"));
// history는 src/index.js에서 전달되는 형태
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      tasks: tasksReducer,
      // react-router-redux의 리듀서
      router: routerReducer,
    }),
    applyMiddleware(
      ...middlewares,
      // react-router-redux의 리덕스 미들웨어
      routerMiddleware(history)
    )
  );
}
