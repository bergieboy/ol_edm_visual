import merge from 'lodash/merge';

import { RECEIVE_ASSOSIATIONS } from '../../actions/edm_actions';

const assosiationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ASSOSIATIONS:
      return merge({}, action.assosiations);

    default:
      return state;
  }
};

export default assosiationsReducer;
