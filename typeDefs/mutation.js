const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    reservation(reservation: ReservationInput!): Reservation
  }
`;

module.exports = {
  mutation,
};
