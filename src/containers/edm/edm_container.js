import React from 'react';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';
import * as Routes from '../../core/router/Routes';


import AssociationsContainer from '../associations/associations_container';
import EntitiesContainer from '../entities/entities_container';
import PropertiesContainer from '../properties/properties_container';
import EDMDetail from '../details/edm_details_container';

const SUB_NAV_LINK_ACTIVE_CLASSNAME :string = 'sub-nav-link-active';

const EDMContainerWrapper = styled.div`
  flex: 0 auto;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  max-height: 100vh;
  max-width: 33%;
  flex-wrap: wrap;
`;

const Nav = styled.nav`
  background-color: #fefefe;
  border: 1px solid #c5d5e5;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: calc(100vw - 100vh);
  margin: 3%;
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
      <Route path={Routes.PROPERTY_TYPES} component={PropertiesContainer} />
      <Route path={Routes.ENTITY_TYPES} component={EntitiesContainer} />
      <Route path={Routes.ASSOCIATION_TYPES} component={AssociationsContainer} />
      <Redirect to={Routes.PROPERTY_TYPES} />
    </Switch>
    <Switch>
      <Route path={Routes.PROPERTY_TYPES} component={EDMDetail} />
      <Route path={Routes.ENTITY_TYPES} component={EDMDetail} />
      <Route path={Routes.ASSOCIATION_TYPES} component={EDMDetail} />
    </Switch>
  </EDMContainerWrapper>
);

export default EDMContainer;
