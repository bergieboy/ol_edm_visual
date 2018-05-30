import React, { Component } from 'react';
import AssosiationListItem from './assosiation_list_item';

class AssosiationsContainer extends Component {

  constructor() {
    super();
    this.state = {
      assosiations: []
    };
  }

  componentDidMount() {
    fetch('https://api.openlattice.com/datastore/edm/association/type')
      .then(res => res.json())
      .then(json => this.setState({ assosiations: json }));
  }

  render() {
    const assosiations = this.state.assosiations.map(assosiation =>
      <AssosiationListItem key={assosiation.id} assosiation={assosiation} />);

    assosiations.sort((a, b) => {
      const nameA = a.props.assosiation.entityType.type.namespace.toUpperCase();
      const nameB = b.props.assosiation.entityType.type.namespace.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    return (
      <div className="list">{assosiations}</div>
    );
  }
}

export default AssosiationsContainer;
