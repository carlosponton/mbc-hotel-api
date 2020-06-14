const { gql } = require("apollo-server");

const reservationType = gql`
  type Reservation {
    _id: ID
    from: Date
    to: Date
  }
`;

module.exports = {
  reservationType,
};
