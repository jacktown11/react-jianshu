import { fromJS } from 'immutable';
import CON from './actionTypes';

const defaultState = fromJS({
  bannerList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CON.INIT_BANNER_LIST:
      return state.set('bannerList', action.bannerList);

    default:
      return state;
  }
};
