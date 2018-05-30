export const RECEIVE_ENTITIES = 'RECEIVE_ENTITIES';
export const RECEIVE_ASSOSIATIONS = 'RECEIVE_ASSOSIATIONS';
export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES';

const receiveEntities = json => ({
  type: RECEIVE_ENTITIES,
  json
});

const receiveAssosiations = json => ({
  type: RECEIVE_ASSOSIATIONS,
  json
});

const receiveProperties = json => ({
  type: RECEIVE_PROPERTIES,
  json
});

export const fetchEntities = () => dispatch => (
  fetch('https://api.openlattice.com/datastore/edm/entity/type')
    .then(res => res.json())
    .then(json => dispatch(receiveEntities(json)))
);

export const fetchAssosiations = () => dispatch => (
  fetch('https://api.openlattice.com/datastore/edm/association/type')
    .then(res => res.json())
    .then(json => dispatch(receiveAssosiations(json)))
);

export const fetchProperties = () => dispatch => (
  fetch('https://api.openlattice.com/datastore/edm/property/type')
    .then(res => res.json())
    .then(json => dispatch(receiveProperties(json)))
);
