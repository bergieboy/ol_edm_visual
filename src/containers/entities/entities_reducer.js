import merge from 'lodash/merge';

import {
  RECEIVE_ENTITIES,
  RECEIVE_ENTITY
} from '../../actions/edm_actions';

const entitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ENTITIES:
      return merge({}, action.entities);

    default:
      return state;
  }
};

export default entitiesReducer;
