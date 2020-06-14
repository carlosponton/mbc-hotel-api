const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    reservation(reservation: ReservationInput!): Reservation

    signup(user: UserInput!): Token
    signin(googleId: String, email: String, password: String): Token
  }
`;

module.exports = {
  mutation,
};
