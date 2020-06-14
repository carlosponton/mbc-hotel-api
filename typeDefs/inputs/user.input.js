const { gql } = require("apollo-server");

const userInput = gql`
  input UserInput {
    familyName: String
    givenName: String
    email: String
    googleId: String
    imageUrl: String
    name: String
    password: String
  }
`;

module.exports = {
  userInput,
};
