const { gql } = require("apollo-server");

const reservationType = gql`
  type Reservation {
    _id: ID
  }
`;

module.exports = {
    reservationType,
};