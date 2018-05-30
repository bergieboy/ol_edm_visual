import React, { Component } from 'react';
import { connect } from 'react-redux';
import EntityListItem from './entity_list_item';


// import { fetchEntities } from '../../actions/edm_actions';
//
// const mapStateToProps = state => ({
//   entities: state
// });
//
// const mapDispatchToProps = dispatch => ({
//   fetchEntities: () => dispatch(fetchEntities())
// });


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
      <div className="list">{entities}</div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(EntitiesContainer);
export default EntitiesContainer;
