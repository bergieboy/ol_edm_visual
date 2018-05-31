import React, { Component } from 'react';
import { connect } from 'react-redux';

import AssosiationListItem from './assosiation_list_item';

import { fetchAssosiations } from '../../actions/edm_actions';


const mapStateToProps = ({ edm }) => ({
  assosiations: Object.keys(edm.assosiations).map((id => edm.assosiations[id]))
});

const mapDispatchToProps = dispatch => ({
  fetchAssosiations: () => dispatch(fetchAssosiations())
});


class AssosiationsContainer extends Component {

  componentDidMount() {
    this.props.fetchAssosiations();
  }

  render() {

    const { assosiations } = this.props;

    if (!assosiations[0]) {
      return (
        <div>Loading...</div>
      );
    }
    const assosiationListItems = this.props.assosiations.map(assosiation =>
      <AssosiationListItem key={assosiation.entityType.id} assosiation={assosiation} />);

    assosiationListItems.sort((a, b) => {
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
      <div className="list">{assosiationListItems}</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssosiationsContainer);
