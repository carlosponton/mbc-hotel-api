const { propertiesResolvers } = require("./properties.resolver");
const { dateResolvers } = require("./scalars");
const { reservationsResolvers } = require("./reservations.resolver");

const resolvers = [propertiesResolvers, dateResolvers, reservationsResolvers];

module.exports = {
  resolvers,
};
