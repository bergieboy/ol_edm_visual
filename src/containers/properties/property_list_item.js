import React from 'react';

const PropertyListItem = ({ property }) => (
  <section className="list-item">
    <article>FQN: {property.type.namespace}.{property.type.name}</article>
    <article>Title: {property.title}</article>
  </section>
);

export default PropertyListItem;
