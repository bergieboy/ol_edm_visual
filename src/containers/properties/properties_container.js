import React, { Component } from 'react';
import PropertyListItem from './property_list_item';

class PropertiesContainer extends Component {

  constructor() {
    super();
    this.state = {
      properties: []
    };
  }

  componentDidMount() {
    fetch('https://api.openlattice.com/datastore/edm/property/type')
      .then(res => res.json())
      .then(json => this.setState({ properties: json }));
  }

  render() {
    const properties = this.state.properties.map(property => (
      <PropertyListItem key={property.id} property={property} />
    ));

    properties.sort((a, b) => {
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
      <div className="list">{properties}</div>
    );
  }
}

export default PropertiesContainer;
