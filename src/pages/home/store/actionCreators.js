import CON from './actionTypes';
import Axios from 'axios';

export const getLoadBannerListAction = () => (dispatch) => {
  Axios.get('/api/banner_list')
    .then((res) => {
      let d = res.data;
      if (d.success) {
        dispatch(getInitBannerListAction(d.data));
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
