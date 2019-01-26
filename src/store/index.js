import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import actionCreators from './actionCreators';
const store = createStore(reducer, applyMiddleware(thunk));

export { actionCreators };

export default store;
