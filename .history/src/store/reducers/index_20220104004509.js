// store -> reducers -> index.js
// 이곳이 rootReducer 입니다.

import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import testReducedr from './test';

export default combineReducers({cartReducer, testReducedr});