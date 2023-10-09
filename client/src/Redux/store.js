import {legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers,applyMiddleware } from 'redux';
import logger from 'redux-logger';
const { userReducer } = require('./user/userReducer');

const store = createStore(userReducer);

export default store;