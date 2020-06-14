const { gql } = require("apollo-server");

const query = gql`
  type Query {
    properties: [Property]
    property(id: ID!): Property
  }
`;

module.exports = {
  query,
};
