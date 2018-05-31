import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SUB_LIST_ITEM_ACTIVE_CLASSNAME :string = 'sub-list-item-active';

const ListItem = styled(NavLink).attrs({
  activeClassName: SUB_LIST_ITEM_ACTIVE_CLASSNAME
})`
  font-size: 14px;
  align-items: center;
  border: 1px solid transparent;
  color: #113355;
  display: flex;
  height: 15px;
  padding: 2%;
  text-decoration: none;
  &:hover {
   cursor: pointer;
   background-color: #beb8e0;
  }
  &.${SUB_LIST_ITEM_ACTIVE_CLASSNAME} {
    border: 1px solid #7a52ea;
    background-color: #beb8e0;
  }
  article {
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
      font-weight: bold;
    }
  }
`;

const EntityListItem = ({ entity }) => (
  <ListItem to={`/entityTypes/${entity.id}`}>
    <article><span>FQN</span>: {entity.type.namespace}.{entity.type.name}</article>
    <article><span>{entity.title}</span></article>
  </ListItem>
);

export default EntityListItem;
