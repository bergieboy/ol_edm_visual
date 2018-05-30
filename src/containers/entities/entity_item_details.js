import React from 'react';

const EntityItemDetails = ({ entity }) => (
  <li className="entity">
    <h3>Entity Details</h3>
    <h4>ID</h4>
    <section>{entity.id}</section>
    <h4>Type</h4>
    <section>{entity.type.namespace}.{entity.type.name}</section>
    <h4>Title</h4>
    <section>{entity.title}</section>
    <h4>Description</h4>
    <section>{entity.description}</section>
    <h4>Category</h4>
    <section>{entity.category}</section>
  </li>
);

export default EntityItemDetails;
