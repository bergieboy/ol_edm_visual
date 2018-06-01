import values from 'lodash/values';

export const propertiesSelector = edm => (Object.values(edm.properties));

export const selectPropertiesForEntity = (edm, properties) => {
  const allProperties = propertiesSelector();
  return allProperties.filter(property => properties.includes(property.id));
};
