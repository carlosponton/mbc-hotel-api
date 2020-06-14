const { propertiesResolvers } = require("./properties.resolver");
const { dateResolvers } = require("./scalars");
const { reservationsResolvers } = require("./reservations.resolver");
const { usersResolvers } = require("./users.resolver");

const resolvers = [
  propertiesResolvers,
  dateResolvers,
  reservationsResolvers,
  usersResolvers,
];

module.exports = {
  resolvers,
};
