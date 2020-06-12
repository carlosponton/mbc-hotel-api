const { gql } = require("apollo-server");

const optionType = gql`
  type Option {
    _id: ID
    name: String
  }
`;

module.exports = {
  optionType,
};
