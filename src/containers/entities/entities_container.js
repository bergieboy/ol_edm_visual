import React, { Component } from 'react';
import { connect } from 'react-redux';
import EntityListItem from './entity_list_item';


import { fetchEntities } from '../../actions/edm_actions';

const mapStateToProps = ({ edm }) => ({
  entities: Object.keys(edm.entities).map((id => edm.entities[id]))
});

const mapDispatchToProps = dispatch => ({
  fetchEntities: () => dispatch(fetchEntities())
});


class EntitiesContainer extends Component {

  componentDidMount() {
    this.props.fetchEntities();
  }


  render() {

    const { entities } = this.props;

    if (!entities[0]) {
      return (
        <div>Loading...</div>
      );
    }

    const entityListItems = this.props.entities.map(entity =>
      <EntityListItem key={entity.id} entity={entity} />);

    entityListItems.sort((a, b) => {
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
      <div className="list">{entityListItems}</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntitiesContainer);
