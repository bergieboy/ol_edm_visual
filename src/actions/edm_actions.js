// FETCH ALL
export const RECEIVE_ENTITIES = 'RECEIVE_ENTITIES';
export const RECEIVE_ASSOSIATIONS = 'RECEIVE_ASSOSIATIONS';
export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES';

// FETCH SINGLE
export const RECEIVE_ENTITY = 'RECEIVE_ENTITIES';
export const RECEIVE_ASSOSIATION = 'RECEIVE_ASSOSIATIONS';
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTIES';

const receiveEntities = entities => ({
  type: RECEIVE_ENTITIES,
  entities
});

const receiveAssociations = associations => ({
  type: RECEIVE_ASSOSIATIONS,
  associations
});

const receiveProperties = properties => ({
  type: RECEIVE_PROPERTIES,
  properties
});

const receiveEntity = entity => ({
  type: RECEIVE_ENTITY,
  entity
});

const receiveAssociation = association => ({
  type: RECEIVE_ASSOSIATION,
  association
});

const receiveProperty = property => ({
  type: RECEIVE_PROPERTY,
  property
});

export const fetchEntities = () => dispatch => (
  fetch('https://api.openlattice.com/datastore/edm/entity/type')
    .then(res => res.json())
    .then(entities => dispatch(receiveEntities(entities)))
);

export const fetchAssociations = () => dispatch => (
  fetch('https://api.openlattice.com/datastore/edm/association/type')
    .then(res => res.json())
    .then(associations => dispatch(receiveAssociations(associations)))
);

export const fetchProperties = () => dispatch => (
  fetch('https://api.openlattice.com/datastore/edm/property/type')
    .then(res => res.json())
    .then(properties => dispatch(receiveProperties(properties)))
);

export const fetchEntity = id => dispatch => (
  fetch(`https://api.openlattice.com/datastore/edm/entity/type/${id}`)
    .then(res => res.json())
    .then(entity => dispatch(receiveEntity(entity)))
);

export const fetchAssociation = id => dispatch => (
  fetch(`https://api.openlattice.com/datastore/edm/association/type/${id}`)
    .then(res => res.json())
    .then(association => dispatch(receiveAssociation(association)))
);

export const fetchProperty = id => dispatch => (
  fetch(`https://api.openlattice.com/datastore/edm/property/type/${id}`)
    .then(res => res.json())
    .then(property => dispatch(receiveProperty(property)))
);
