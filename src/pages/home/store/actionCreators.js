import { fromJS } from 'immutable';
import Axios from 'axios';

import CON from './actionTypes';

export const getLoadBannerListAction = () => (dispatch) => {
  Axios.get('/api/banner_list')
    .then((res) => {
      let d = res.data;
      if (d.success) {
        dispatch(getInitBannerListAction(fromJS(d.data)));
      } else {
        console.log('fail to load banner_list');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getInitBannerListAction = (bannerList) => ({
  type: CON.INIT_BANNER_LIST,
  bannerList
});

export const getLoadArticleListAction = (page) => (dispatch) => {
  let url = page === 1 ? '/api/article_list' : '/api/article_list_more';
  Axios.get(url).then((res) => {
    let d = res.data;
    if (d.success) {
      dispatch(getAddArticleListAction(fromJS(d.data), page));
    }
  });
};

export const getAddArticleListAction = (articleList, page) => ({
  type: CON.ADD_ARTICLE_LIST,
  articleList,
  page
});

export const getLoadSubjectListAction = () => (dispatch) => {
  Axios.get('/api/subject_list').then((res) => {
    let d = res.data;
    if (d.success) {
      dispatch(getInitSubjectListAction(fromJS(d.data)));
    }
  });
};

export const getInitSubjectListAction = (subjectList) => ({
  type: CON.INIT_SUBJECT_LIST,
  subjectList
});

export const getTwoDImgHoverAction = (isTwoDImgHover) => ({
  type: CON.TWO_D_IMG_HOVER,
  isTwoDImgHover
});

export const getLoadWriterListAction = () => (dispatch) => {
  Axios.get('/api/writer_list').then((res) => {
    let d = res.data;
    if (d.success) {
      dispatch(getInitWriterListAction(fromJS(d.data)));
    } else {
      console.log('fail to load writer list data');
    }
  });
};

export const getInitWriterListAction = (writerList) => ({
  type: CON.INIT_WRITER_LIST,
  writerList
});

export const getUpdateIsShowToTopAction = (isShowToTop) => ({
  type: CON.UPDATE_IS_SHOW_TO_TOP,
  isShowToTop
});
