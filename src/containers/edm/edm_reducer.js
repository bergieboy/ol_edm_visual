import { combineReducers } from 'redux';

import entitiesReducer from '../entities/entities_reducer';
import assosiationsReducer from '../assosiations/assosiations_reducer';
import propertiesReducer from '../properties/properties_reducer';

const edmReducer = combineReducers({
  entities: entitiesReducer,
  assosiations: assosiationsReducer,
  properties: propertiesReducer
});

export default edmReducer;
