const { gql } = require("apollo-server");

const propertyType = gql`
  type Property {
    _id: ID
    title: String
    description: String
    photos: [String]
    price: Float
    options: [Option]
    reservations: [Date]
  }
`;

module.exports = {
  propertyType,
};
