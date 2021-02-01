import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./sagas";
import { rootReducers } from "./reducers";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({});

const configureStore = () => {
  const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
