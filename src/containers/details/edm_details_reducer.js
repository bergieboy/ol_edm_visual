import merge from 'lodash/merge';

import {
  RECEIVE_ENTITY,
  RECEIVE_ASSOCIATION,
  RECEIVE_PROPERTY
} from '../../actions/edm_actions';

const edmDetailsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ENTITY:
      return merge({}, action.entity);

    case RECEIVE_ASSOCIATION:
      return merge({}, action.association);

    case RECEIVE_PROPERTY:
      return merge({}, action.property);

    default:
      return state;
  }
};

export default edmDetailsReducer;
