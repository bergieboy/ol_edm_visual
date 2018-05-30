import { combineReducers } from 'redux-immutable';

import entitiesReducer from '../entities/entities_reducer';

const edmReducer = combineReducers({
  entities: entitiesReducer
});

export default edmReducer;
