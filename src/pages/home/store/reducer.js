import { fromJS } from 'immutable';
import CON from './actionTypes';

const defaultState = fromJS({
  bannerList: [],
  articleList: [],
  subjectList: [],
  writerList: [],
  isTwoDImgHover: false,
  currentPage: 0,
  isShowToTop: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CON.INIT_BANNER_LIST:
      return state.set('bannerList', action.bannerList);
    case CON.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.articleList),
        currentPage: action.page
      });
    case CON.INIT_SUBJECT_LIST:
      return state.set('subjectList', action.subjectList);
    case CON.TWO_D_IMG_HOVER:
      return state.set('isTwoDImgHover', action.isTwoDImgHover);
    case CON.INIT_WRITER_LIST:
      return state.set('writerList', action.writerList);
    case CON.UPDATE_IS_SHOW_TO_TOP:
      return state.set('isShowToTop', action.isShowToTop);
    default:
      return state;
  }
};
