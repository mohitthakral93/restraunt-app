import {applyMiddleware,createStore} from "redux";
import reducers from "./reducers/combinedReducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const middlewares = applyMiddleware(logger(),thunk,promise());

export default createStore(reducers,middlewares);
