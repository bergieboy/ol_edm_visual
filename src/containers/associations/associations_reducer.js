import merge from 'lodash/merge';

import { RECEIVE_ASSOCIATIONS } from '../../actions/edm_actions';

const associationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ASSOCIATIONS:
      return merge({}, action.associations);

    default:
      return state;
  }
};

export default associationsReducer;
