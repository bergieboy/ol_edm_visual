import { combineReducers } from 'redux';

import entitiesReducer from '../entities/entities_reducer';
import associationsReducer from '../associations/associations_reducer';
import propertiesReducer from '../properties/properties_reducer';
import edmDetailsReducer from '../details/edm_details_reducer';

const edmReducer = combineReducers({
  entities: entitiesReducer,
  associations: associationsReducer,
  properties: propertiesReducer,
  current: edmDetailsReducer
});

export default edmReducer;
