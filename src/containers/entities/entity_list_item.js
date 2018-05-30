import React from 'react';

const EntityListItem = ({ entity }) => (
  <li className="entity">
      <article>Type: {entity.type.namespace}.{entity.type.name}</article>
      <article>Title: {entity.title}</article>
  </li>
);

export default EntityListItem;
