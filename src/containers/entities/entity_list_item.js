import React from 'react';

const EntityListItem = ({ entity }) => (
  <section className="list-item">
    <article>FQN: {entity.type.namespace}.{entity.type.name}</article>
    <article>Title: {entity.title}</article>
  </section>
);

export default EntityListItem;
