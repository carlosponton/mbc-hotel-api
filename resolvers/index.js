const { propertiesResolvers } = require('./properties.resolver');
const { dateResolvers } = require('./scalars');

const resolvers = [propertiesResolvers, dateResolvers];

module.exports = {
  resolvers,
};