import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';

import CON from './actionTypes';

const defaultState = fromJS({
  isLogedIn: false
});
const siteReducer = (state = defaultState, action) => {
  if (action.type === CON.UPDATE_IS_LOGED_IN) {
    return state.set('isLogedIn', action.isLogedIn);
  } else {
    return state;
  }
};

export const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  site: siteReducer
});
