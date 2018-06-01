import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PropertyListItem from './property_list_item';

import { fetchProperties } from '../../actions/edm_actions';

const ListItems = styled.div`
  margin: 1%;
  background-color: #fefefe;
  border: 1px solid #c5d5e5;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  height:auto;
  max-height: 58vh;
  width: 33.33vw;
  overflow-y:scroll;
  width: calc(100vw - 100vh);
`;

const mapStateToProps = ({ edm }) => ({
  properties: Object.keys(edm.properties).map((id => edm.properties[id]))
});

const mapDispatchToProps = dispatch => ({
  fetchProperties: () => dispatch(fetchProperties())
});


class PropertiesContainer extends Component {

  componentDidMount() {
    this.props.fetchProperties();
  }

  render() {

    const { properties } = this.props;

    if (!properties[0]) {
      return (
        <div>Loading...</div>
      );
    }
    const propertyListItems = this.props.properties.map(property => (
      <PropertyListItem key={property.id} property={property} />
    ));

    propertyListItems.sort((a, b) => {
      const nameA = a.props.property.type.namespace.toUpperCase();
      const nameB = b.props.property.type.namespace.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    return (
      <ListItems>
        {propertyListItems}
      </ListItems>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesContainer);
