import React from 'react';

const AssosiationItemDetails = ({ assosiation }) => (
  <li className="assosiation">
    <h3>Entity Details</h3>
    <h4>ID:</h4>
    <section>{assosiation.id}</section>
    <h4>Type:</h4>
    <section>{assosiation.type.namespace}.{assosiation.type.name}</section>
    <h4>Title:</h4>
    <section>{assosiation.title}</section>
    <h4>Description:</h4>
    <section>{assosiation.description}</section>
    <h4>Category:</h4>
    <section>{assosiation.category}</section>
  </li>
);

export default AssosiationItemDetails;
