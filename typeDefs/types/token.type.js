const { gql } = require("apollo-server");

const tokenType = gql`
  type Token {
    token: String
  }
`;

module.exports = {
  tokenType,
};
