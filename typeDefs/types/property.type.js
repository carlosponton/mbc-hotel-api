const { gql } = require("apollo-server");

const propertyType = gql`
  type Property {
    _id: ID
    title: String
    photos: [String]
    price: Float
    options: [Option]
  }
`;

module.exports = {
    propertyType,
};