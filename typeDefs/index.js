const { query } = require("./query");
const { mutation } = require("./mutation");
const types = require("./types");
const scalars = require("./scalars");
const inputs = require("./inputs");

const typeDefs = [
  query,
  mutation,
  ...Object.values(types),
  ...Object.values(scalars),
  ...Object.values(inputs),
];

module.exports = {
  typeDefs,
};
