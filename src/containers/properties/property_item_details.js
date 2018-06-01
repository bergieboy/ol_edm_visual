import React from 'react';

const AssociationItemDetails = ({ current }) => (
  <li className="association">
    <h3>Entity Details</h3>
    <h4>ID:</h4>
    <section>{current.id}</section>
    <h4>Type:</h4>
    <section>{current.type.namespace}.{current.type.name}</section>
    <h4>Title:</h4>
    <section>{current.title}</section>
    <h4>Description:</h4>
    <section>{current.description}</section>
    <h4>Category:</h4>
    <section>{current.category}</section>
  </li>
);

export default AssociationItemDetails;
