const { query } = require("./query");
const { propertyType, optionType } = require("./types");
const { dateScalar } = require("./scalars");

const typeDefs = [query, propertyType, optionType, dateScalar];

module.exports = {
  typeDefs,
};