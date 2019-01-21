import { fromJS } from 'immutable';
import CON from './actionTypes';
import { COUNT_PER_PAGE } from '../';

const defaultState = fromJS({
  isFocused: false,
  isMouseIn: false,
  hotKeywordList: [],
  currentPage: 1,
  totalPage: 1
});

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CON.UPDATE_IS_FOCUSED:
      return state.set('isFocused', action.isFocused);
    case CON.UPDATE_IS_MOUSE_IN:
      return state.set('isMouseIn', action.isMouseIn);
    case CON.INIT_HOT_KEYWORD:
      let list = action.hotKeywordList;
      return state.merge({
        hotKeywordList: list,
        totalPage: Math.ceil(list.size / COUNT_PER_PAGE)
      });
    case CON.GO_NEXT_PAGE:
      return state.set('currentPage', action.page);
    default:
      return state;
  }
};
