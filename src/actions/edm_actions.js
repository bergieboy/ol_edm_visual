export const RECEIVE_ENTITIES = 'RECEIVE_ENTITIES';
export const RECEIVE_ASSOSIATIONS = 'RECEIVE_ASSOSIATIONS';
export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES';

const receiveEntities = entities => ({
  type: RECEIVE_ENTITIES,
  entities
});

const receiveAssosiations = assosiations => ({
  type: RECEIVE_ASSOSIATIONS,
  assosiations
});

const receiveProperties = properties => ({
  type: RECEIVE_PROPERTIES,
  properties
});

export const fetchEntities = () => dispatch => (
  fetch('https://api.openlattice.com/datastore/edm/entity/type')
    .then(res => res.json())
    .then(entities => dispatch(receiveEntities(entities)))
);

export const fetchAssosiations = () => dispatch => (
  fetch('https://api.openlattice.com/datastore/edm/association/type')
    .then(res => res.json())
    .then(assosiations => dispatch(receiveAssosiations(assosiations)))
);

export const fetchProperties = () => dispatch => (
  fetch('https://api.openlattice.com/datastore/edm/property/type')
    .then(res => res.json())
    .then(properties => dispatch(receiveProperties(properties)))
);
