import React from 'react';
import { NavLink, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import * as Routes from '../../core/router/Routes';


import AssosiationsContainer from '../assosiations/assosiations_container';
import EntitiesContainer from '../entities/entities_container';
import PropertiesContainer from '../properties/properties_container';

const SUB_NAV_LINK_ACTIVE_CLASSNAME :string = 'sub-nav-link-active';

const EDMContainerWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  margin: 0;
  padding: 0;
`;

const Nav = styled.nav`
  background-color: #fefefe;
  border-bottom: 1px solid #c5d5e5;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  height: 100%;
  width: 33%;
`;

const NavTab = styled(NavLink).attrs({
  activeClassName: SUB_NAV_LINK_ACTIVE_CLASSNAME
})`
  align-items: center;
  border-bottom: 1px solid transparent;
  color: #113355;
  display: flex;
  height: 100%;
  margin: 0 25px;
  text-align: center;
  text-decoration: none;
  &:hover {
   cursor: pointer;
  }
  &.${SUB_NAV_LINK_ACTIVE_CLASSNAME} {
    border-bottom: 1px solid #7a52ea;
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
      <Route exact path="/propertyTypes" component={PropertiesContainer} />
      <Route exact path="/entityTypes" component={EntitiesContainer} />
      <Route exact path="/associationTypes" component={AssosiationsContainer} />
    </Switch>
  </EDMContainerWrapper>
);

export default EDMContainer;
