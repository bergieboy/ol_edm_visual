import merge from 'lodash/merge';

import { RECEIVE_ENTITIES } from '../../actions/edm_actions';

const entitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  console.log(action);
  switch (action.type) {
    case RECEIVE_ENTITIES:
      return merge({}, action.entities);

    default:
      return state;
  }
};

export default entitiesReducer;
