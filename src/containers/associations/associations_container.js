import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import AssociationListItem from './association_list_item';

import { fetchAssociations } from '../../actions/edm_actions';

const ListItems = styled.div`
margin: 3%;
background-color: #fefefe;
border: 1px solid #c5d5e5;
display: flex;
flex-direction: column;
flex: 0 0 auto;
height:auto;
max-height: 53.5vh;
width: 33.33vw;
overflow-y:scroll;
width: calc(100vw - 100vh);
`;

const mapStateToProps = ({ edm }) => ({
  associations: Object.keys(edm.associations).map((id => edm.associations[id]))
});

const mapDispatchToProps = dispatch => ({
  fetchAssociations: () => dispatch(fetchAssociations())
});


class AssociationsContainer extends Component {

  componentDidMount() {
    this.props.fetchAssociations();
  }

  render() {

    const { associations } = this.props;

    if (!associations[0]) {
      return (
        <div>Loading...</div>
      );
    }
    const associationListItems = this.props.associations.map(association =>
      <AssociationListItem key={association.entityType.id} association={association} />);

    associationListItems.sort((a, b) => {
      const nameA = a.props.association.entityType.type.namespace.toUpperCase();
      const nameB = b.props.association.entityType.type.namespace.toUpperCase();
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
        {associationListItems}
      </ListItems>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssociationsContainer);
