import React from 'react';

const AssociationItemDetails = ({ association }) => (
  <li className="association">
    <h3>Entity Details</h3>
    <h4>ID:</h4>
    <section>{association.id}</section>
    <h4>Type:</h4>
    <section>{association.type.namespace}.{association.type.name}</section>
    <h4>Title:</h4>
    <section>{association.title}</section>
    <h4>Description:</h4>
    <section>{association.description}</section>
    <h4>Category:</h4>
    <section>{association.category}</section>
  </li>
);

export default AssociationItemDetails;
