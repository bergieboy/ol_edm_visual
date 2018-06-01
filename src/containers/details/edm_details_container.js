import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as Routes from '../../core/router/Routes';

import { fetchProperties, fetchEntity, fetchAssociation, fetchProperty } from '../../actions/edm_actions';
import { selectPropertiesForEntity } from '../../selectors/properties_selector';

import EntityItemDetails from '../entities/entity_item_details';
import AssociationItemDetails from '../associations/association_item_details';
import PropertyItemDetails from '../properties/property_item_details';

const mapStateToProps = ({ edm }) => ({
  current: edm.current
});

const mapDispatchToProps = dispatch => ({
  fetchEntity: id => dispatch(fetchEntity(id)),
  fetchAssociation: id => dispatch(fetchAssociation(id)),
  fetchProperty: id => dispatch(fetchProperty(id)),
  fetchProperties: () => dispatch(fetchProperties())
});


class EDMDetail extends Component {

  componentDidMount() {
    const pathType = this.props.match.path;
    const pathId = this.props.match.params.id;
    if (pathType === Routes.ENTITY_TYPES) {
      const entAdd = 'https://api.openlattice.com/datastore/edm/entity/type/' + pathId;
      this.props.fetchEntity(entAdd);
      this.props.fetchProperties();
    } else if (pathType === Routes.ASSOCIATION_TYPES) {
      const assAdd = 'https://api.openlattice.com/datastore/edm/association/type/' + pathId;
      this.props.fetchAssociation(assAdd);
      this.props.fetchProperties();
    } else if (pathType === Routes.PROPERTY_TYPES) {
      const propAdd = 'https://api.openlattice.com/datastore/edm/property/type/' + pathId;
      this.props.fetchProperty(propAdd);
      this.props.fetchProperties();
    }
  }

  componentWillReceiveProps(newProps) {
    const newId = newProps.match.params.id;
    const oldId = this.props.match.params.id;
    if (newId !== oldId) {
      const entAdd = 'https://api.openlattice.com/datastore/edm/entity/type/' + newId;
      const assAdd = 'https://api.openlattice.com/datastore/edm/association/type/' + newId;
      const propAdd = 'https://api.openlattice.com/datastore/edm/property/type/' + newId;
      const pathType = this.props.match.path;
      if (pathType === Routes.ENTITY_TYPES) {
        this.props.fetchEntity(entAdd);
        this.props.fetchProperties();
      } else if (pathType === Routes.ASSOCIATION_TYPES) {
        this.props.fetchAssociation(assAdd);
        this.props.fetchProperties();
      } else if (pathType === Routes.PROPERTY_TYPES) {
        this.props.fetchProperty(propAdd);
        this.props.fetchProperties();
      }
    }
  }

  findCurrentComponent() {
    const pathType = this.props.match.path;;
    let current;
    if (pathType === Routes.ENTITY_TYPES) {
      current = EntityItemDetails;
    } else if (pathType === Routes.ASSOCIATION_TYPES) {
      current = AssociationItemDetails;
    } else if (pathType === Routes.PROPERTY_TYPES) {
      current = PropertyItemDetails;
    }
    return current;
  }

  render() {
    const { current } = this.props;

    if (Object.keys(current).length === 0 && current.constructor === Object) {
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
