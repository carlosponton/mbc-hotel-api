const { gql } = require("apollo-server");

const reservationInput = gql`
  input ReservationInput {
    id: ID
    from: Date
    to: Date
  }
`;

module.exports = {
  reservationInput,
};
