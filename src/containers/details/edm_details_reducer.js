import merge from 'lodash/merge';

import { RECEIVE_PROPERTIES } from '../../actions/edm_actions';

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

    case RECEIVE_PROPERTIES:
      let newState = merge({}, state);
      console.log(newState["entityType"]["properties"]);
      if (newState["entityType"]) {
        newState["entityType"]["properties"] = action.properties
          .filter(property => (newState["entityType"]["properties"]).includes(property.id));
        return newState;
      }
      newState["properties"] = action.properties
        .filter(property => newState["properties"].includes(property.id));
      return newState;

    default:
      return state;
  }
};

export default edmDetailsReducer;