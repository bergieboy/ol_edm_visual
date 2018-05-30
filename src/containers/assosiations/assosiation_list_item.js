import React from 'react';

const AssosiationListItem = ({ assosiation }) => (
  <section className="list-item">
    <article>FQN: {assosiation.entityType.type.namespace}.{assosiation.entityType.type.name}</article>
    <article>Title: {assosiation.entityType.title}</article>
  </section>
);

export default AssosiationListItem;
