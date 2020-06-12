const { Property } = require("../models");

const propertiesResolvers = {
    Query: {
        properties: () => Property.find(),
    },
};

module.exports = {
    propertiesResolvers,
}