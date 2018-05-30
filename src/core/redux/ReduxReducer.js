import { combineReducers } from 'redux';
import edmReducer from '../../containers/edm/edm_reducer';

const reduxReducer = combineReducers({
  edm: edmReducer
});

export default reduxReducer;
