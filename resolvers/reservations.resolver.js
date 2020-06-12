const { Reservation, Property } = require("../models");

const reservationsResolvers = {
  Mutation: {
    reservation: async (parent, { reservation: { id, from, to } }) => {
      const reservation = await Reservation.create({ property: id, from, to });
      const property = await Property.findById(id);
      property.reservation.push(reservation._id);
      await property.save();
      return reservation;
    },
  },
};

module.exports = {
  reservationsResolvers,
};
