import { createStore, applyMiddleware } from "redux";
import { auth } from "../reducers";
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const allStore = createStore(
  auth,
  composeWithDevTools(applyMiddleware(Thunk))
);

export default allStore;