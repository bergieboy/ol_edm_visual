### Todd Bergman's OpenLattice Coding Challenge

For this coding challenge I built a web app that navigates the OpenLattice Entity Data Model. This application utilizes the api endpoints provided by OpenLattice to create a React/Redux, frontend-only, web application. My actions were broken up into six separate creators, allowing me to fetch all or just one of Property Types, Entity Types, or Association Types depending on which component is being rendered. The application is made up of two main components. There is a `ListItems` component for Property Types, Entity Types, and Association Types, and a Single `EDMDetails` component, which renders the details of whichever item is selected on the  `ListItems` component. The `Nav` component allows you to navigate between List Items for each Data Type.

Something I would have done differently would have be to create a separate details component for each Data Type. I believe this would have made my code more modular, and easier to read for other developers. If I were given more time, I would have liked to organize `ListItems` in an color-coded 'accordion-style' list by `namespace` and provide a search bar to make navigation easier for the user. I would also have liked to create a D3 visualization that mapped associations between entity types.

This app was not designed to be viewed on mobile devices.

Thank you for the opportunity!

[My Portfolio](https://tlbergman.com)

[My Github](https://github.com/bergieboy)

[![Greenkeeper badge](https://badges.greenkeeper.io/openlattice/lets-react.svg)](https://greenkeeper.io/)

# OpenLattice Frontend Coding Challenge
Build a React web app that provides insight into the OpenLattice Entity Data Model (EDM).

## What is the EDM?
The EDM is primarily composed of 3 components:

  - **PropertyType**

  - **EntityType**

  - **AssociationType**


## PropertyType

A "PropertyType" is an object that serves as field definition for a dataset. For example, "First Name" would be considered a PropertyType on a dataset for people.


## EntityType

An "EntityType" is a collection of PropertyTypes, and it defines a specific dataset. For example, "Person" would be considered an EntityType, and it would contain PropertyTypes like "First Name", "Last Name", "Date of Birth".


## AssociationType

An "AssociationType" is also an EntityType. However, it serves a slightly different purpose, that is to connect one EntityType to another EntityType: a source to a destination. For example, "Lives At" would be considered an AssociationType, and it would contain the "Person" EntityType for the source, and perhaps an "Address" EntityType for the destination. Additionally, an AssociationType can have PropertyTypes to describe that connection, for example "Date".


To explore and interact with the current OpenLattice EDM, please visit:

https://openlattice.com/edm


To view the actual definitions of the EDM components, the source code can be found here:

https://github.com/openlattice/api/tree/develop/src/main/java/com/openlattice/edm/type

## Coding Challenge
The goal is to use the OpenLattice API to load all PropertyTypes, EntityTypes, and AssociationTypes, and display these components in a way that provides insights into their qualities, relationships, and/or structure. Some example of possible solutions include:

An interface which allows the user to explore and interact with the EDM (without just rebuilding our EDM app)

An interface containing charts and/or graphs which show aggregate statistics about the EDM

A visualization to represent the structure and the relationships between the EDM components in a way that is useful, not just pretty.


Feel free to implement as many of these solutions (or others) as you'd like. To get started, we ask that you use our “Let’s React” project to bootstrap your application. However, you **may not** use our existing “lattice-edm” project. You may use any 3rd-party libraries/tools, but we just ask that you stick with React+Redux.


### Let’s React:

https://github.com/openlattice/lets-react

Make sure to remove the “lattice-auth” dependency; auth is not necessary

Make sure to remove the FontAwesome Pro dependencies

For any other issues you run into, please contact us


#### To view our EDM API, please visit:

https://github.com/openlattice/api/blob/develop/src/main/java/com/openlattice/edm/EdmApi.java


#### The endpoints for getting PropertyTypes, EntityTypes, and AssociationTypes are:

https://api.openlattice.com/datastore/edm/property/type

https://api.openlattice.com/datastore/edm/entity/type

https://api.openlattice.com/datastore/edm/association/type


Please don’t hesitate to reach out with any questions.
