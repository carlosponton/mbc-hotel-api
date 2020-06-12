const { gql } = require("apollo-server");

const dateScalar = gql`
  scalar Date
`;

module.exports = {
    dateScalar,
};