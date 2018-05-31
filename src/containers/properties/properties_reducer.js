import merge from 'lodash/merge';

import { RECEIVE_PROPERTIES } from '../../actions/edm_actions';

const propertiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROPERTIES:
      return merge({}, action.properties);

    default:
      return state;
  }
};

export default propertiesReducer;
