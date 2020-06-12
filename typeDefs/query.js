const { gql } = require("apollo-server");

const query = gql`
  type Query {
    properties: [Property]
  }
`;

module.exports = {
  query,
};