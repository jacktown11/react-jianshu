import CON from './actionTypes';
import Axios from 'axios';
import { fromJS } from 'immutable';

export const getUpdateIsFocusedAction = (isFocused) => ({
  type: CON.UPDATE_IS_FOCUSED,
  isFocused
});
export const getUpdateIsMouseInAction = (isMouseIn) => ({
  type: CON.UPDATE_IS_MOUSE_IN,
  isMouseIn
});
export const getInitHotKeywordAction = (hotKeywordList) => ({
  type: CON.INIT_HOT_KEYWORD,
  hotKeywordList
});
export const getLoadHotKeywordAction = () => (dispatch) => {
  Axios.get('/api/hot_keyword_list').then((res) => {
    let data = res.data;
    if (data.success) {
      dispatch(getInitHotKeywordAction(fromJS(res.data.data)));
    }
  });
};
export const getGoNextPageAction = (page) => ({
  type: CON.GO_NEXT_PAGE,
  page
});
