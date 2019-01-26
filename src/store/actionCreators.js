import CON from './actionTypes';

export const getUpdateIsLogedInAction = (isLogedIn) => ({
  type: CON.UPDATE_IS_LOGED_IN,
  isLogedIn
});

export default {
  getUpdateIsLogedInAction
};
