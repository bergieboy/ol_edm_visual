import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as Routes from '../../core/router/Routes';

import { fetchEntity, fetchAssociation, fetchProperty } from '../../actions/edm_actions';

import EntityItemDetails from '../entities/entity_item_details';
import AssociationItemDetails from '../associations/association_item_details';
import PropertyItemDetails from '../properties/property_item_details';

const mapStateToProps = ({ edm }) => ({
  current: edm.current
});

const mapDispatchToProps = dispatch => ({
  fetchEntity: id => dispatch(fetchEntity(id)),
  fetchAssociation: id => dispatch(fetchAssociation(id)),
  fetchProperty: id => dispatch(fetchProperty(id))
});


class EDMDetail extends Component {

  componentDidMount() {
    const pathType = this.props.match.path;
    const pathId = this.props.location.pathname.split('/')[2];
    const entAdd = 'https://api.openlattice.com/datastore/edm/entity/type/' + pathId;
    const assAdd = 'https://api.openlattice.com/datastore/edm/association/type/' + pathId;
    const propAdd = 'https://api.openlattice.com/datastore/edm/property/type/' + pathId;
    if (pathType === Routes.ENTITY_TYPES) {
      this.props.fetchEntity(entAdd);
    } else if (pathType === Routes.ASSOCIATION_TYPES) {
      this.props.fetchAssociation(assAdd);
    } else if (pathType === Routes.PROPERTY_TYPES) {
      this.props.fetchProperty(propAdd);
    }
  }

  componentWillReceiveProps(newProps) {
    const newId = newProps.match.params.id;
    const oldId = this.props.match.params.id;
    console.log(oldId);
    if (newId !== oldId) {
      const entAdd = 'https://api.openlattice.com/datastore/edm/entity/type/' + newId;
      const assAdd = 'https://api.openlattice.com/datastore/edm/association/type/' + newId;
      const propAdd = 'https://api.openlattice.com/datastore/edm/property/type/' + newId;
      const pathType = this.props.match.path;
      if (pathType === Routes.ENTITY_TYPES) {
        this.props.fetchEntity(entAdd);
      } else if (pathType === Routes.ASSOCIATION_TYPES) {
        this.props.fetchAssociation(assAdd);
      } else if (pathType === Routes.PROPERTY_TYPES) {
        this.props.fetchProperty(propAdd);
      }
    }
  }

  findCurrentComponent() {
    const pathType = this.props.location.pathname.split('/')[1];
    let current;
    if (pathType === Routes.ENTITY_TYPES.split('/')[1]) {
      current = EntityItemDetails;
    } else if (pathType === Routes.ASSOCIATION_TYPES.split('/')[1]) {
      current = AssociationItemDetails;
    } else if (pathType === Routes.PROPERTY_TYPES.split('/')[1]) {
      current = PropertyItemDetails;
    }
    return current;
  }

  render() {
    const { current } = this.props;
    if (!current.id) {
      return (
        <div>Loading...</div>
      );
    }

    const CurrentComponent = this.findCurrentComponent();

    return (
      <CurrentComponent current={current}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EDMDetail);
