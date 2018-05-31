import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import * as Routes from '../../core/router/Routes';


import AssociationsContainer from '../associations/associations_container';
import EntitiesContainer from '../entities/entities_container';
import PropertiesContainer from '../properties/properties_container';

const SUB_NAV_LINK_ACTIVE_CLASSNAME :string = 'sub-nav-link-active';

const EDMContainerWrapper = styled.div`
  flex: 0 auto;
  margin: 0;
  padding: 0;
`;

const Nav = styled.nav`
  background-color: #fefefe;
  border: 1px solid #c5d5e5;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: calc(100vw - 100vh);
  margin: 1%;
`;

const NavTab = styled(NavLink).attrs({
  activeClassName: SUB_NAV_LINK_ACTIVE_CLASSNAME
})`
  align-items: center;
  border: 1px solid transparent;
  color: #113355;
  display: flex;
  height: 8vh;
  padding: 5%;
  text-decoration: none;
  &:hover {
   cursor: pointer;
  }
  &.${SUB_NAV_LINK_ACTIVE_CLASSNAME} {
    border: 1px solid #7a52ea;
    color: #7a52ea;
  }
`;

const EDMContainer = () => (
  <EDMContainerWrapper>
    <Nav>
      <NavTab to={Routes.PROPERTY_TYPES}>PropertyTypes</NavTab>
      <NavTab to={Routes.ENTITY_TYPES}>EntityTypes</NavTab>
      <NavTab to={Routes.ASSOCIATION_TYPES}>AssociationTypes</NavTab>
    </Nav>
    <Switch>
      <Route path="/propertyTypes" component={PropertiesContainer} />
      <Route path="/entityTypes" component={EntitiesContainer} />
      <Route path="/associationTypes" component={AssociationsContainer} />
    </Switch>
  </EDMContainerWrapper>
);

export default EDMContainer;
