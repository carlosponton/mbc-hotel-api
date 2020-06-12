const { Property } = require("../models");

const propertiesResolvers = {
  Query: {
    properties: () => Property.find().populate("options"),
    property: (parent, { id }) => Property.findById(id).populate("options"),
  },
};

module.exports = {
  propertiesResolvers,
};
