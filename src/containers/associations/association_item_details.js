import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropertyListItem from '../properties/property_list_item';

const ItemDetails = styled.div`
  margin: 3%;
  padding: 10%;
  background-color: #fefefe;
  border: 1px solid #c5d5e5;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y:scroll;
  width: 52vw;
  h1 {
    text-align: center;
    margin: auto;
    width: 50%;
  }
`;

const AssociationItemDetails = ({ current }) => {
  if (current.errors || typeof current.entityType === 'undefined') {
    return (
      <ItemDetails>
        <h1>Select An Association Type!</h1>
      </ItemDetails>
    );
  }
  const { properties } = current.entityType;
  if (!properties || !properties[0].id) {
    return (
      <div>Loading...</div>
    );
  }

  const propertyListItems = properties.map(property =>
    <PropertyListItem key={property.id} property={property} />);

  return (
    <ItemDetails>
      <h3>Association Details</h3>
      <h4>ID:</h4>
      <section>{current.entityType.id}</section>
      <h4>Type:</h4>
      <section>{current.entityType.type.namespace}.{current.entityType.type.name}</section>
      <h4>Title:</h4>
      <section>{current.entityType.title}</section>
      <h4>Description:</h4>
      <section>{current.entityType.description}</section>
      <h4>Category:</h4>
      <section>{current.entityType.category}</section>
      <h4>Properties</h4>
      <section>{propertyListItems}</section>
    </ItemDetails>
  );
};

export default AssociationItemDetails;
