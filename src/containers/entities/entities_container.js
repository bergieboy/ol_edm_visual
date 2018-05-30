import React, { Component } from 'react';
import EntityListItem from './entity_list_item';

class EntitiesContainer extends Component {

  constructor() {
    super();
    this.state = {
      entities: []
    };
  }

  componentDidMount() {
    fetch('https://api.openlattice.com/datastore/edm/entity/type')
      .then(res => res.json())
      .then(json => this.setState({ entities: json }));
  }

  render() {
    const entities = this.state.entities.map(entity =>
      <EntityListItem key={entity.id} entity={entity} />);

    entities.sort((a, b) => {
      const nameA = a.props.entity.type.namespace.toUpperCase();
      const nameB = b.props.entity.type.namespace.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    return (
      <ul>{entities}</ul>
    );
  }
}

export default EntitiesContainer;
