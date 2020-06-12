const { gql } = require("apollo-server");

const availabilityType = gql`
  type Availability {
    from: Date
    to: Date
  }
`;

module.exports = {
    availabilityType,
};