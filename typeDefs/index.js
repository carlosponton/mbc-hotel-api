const { query } = require("./query");
const { propertyType, optionType, availabilityType } = require("./types");
const { dateScalar } = require("./scalars");

const typeDefs = [query, propertyType, optionType, availabilityType, dateScalar];

module.exports = {
  typeDefs,
};