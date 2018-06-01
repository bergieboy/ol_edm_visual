import React from 'react';
import styled from 'styled-components';

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

const PropertyItemDetails = ({ current }) => {
  if (current.errors || typeof current.piiField === 'undefined') {
    return (
      <ItemDetails>
        <h1>Select A Property Type!</h1>
      </ItemDetails>
    );
  }
  return (
    <ItemDetails>
      <h2>Property Details</h2>
      <h4>ID:</h4>
      <section>{current.id}</section>
      <h4>Type:</h4>
      <section>{current.type.namespace}.{current.type.name}</section>
      <h4>Title:</h4>
      <section>{current.title}</section>
      <h4>Description:</h4>
      <section>description...</section>
      <h4>Data Type:</h4>
      <section>{current.datatype}</section>
      <h4>PII:</h4>
      <section>{current.piiField.toString()}</section>
      <h4>Analyzer:</h4>
      <section>{current.analyzer}</section>
    </ItemDetails>
  );

};

export default PropertyItemDetails;
