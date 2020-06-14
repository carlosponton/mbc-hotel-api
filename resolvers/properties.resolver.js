const { Property } = require("../models");

const parseReservations = (reservations) => {
  let dateReservation = [];

  for (let reservation of reservations) {
    const { from, to } = reservation;
    const dates = calculateDate(from, to);
    dateReservation = [...dateReservation, ...dates];
  }

  return dateReservation;
};

const calculateDate = (from, to) => {
  const days = calculateDays(from, to);
  let dates = [];

  for (let i = 0; i < days; i++) {
    const day = from.getDate();
    let newDate = from.setDate(day + 1);
    dates.push(new Date(newDate));
  }
  return dates;
};

const calculateDays = (from, to) => {
  to.setHours(0);
  to.setMinutes(0);
  to.setSeconds(0);
  to.setMilliseconds(0);
  from.setHours(0);
  from.setMinutes(0);
  from.setSeconds(0);
  from.setMilliseconds(0);
  const differenceInTime = to.getTime() - from.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return differenceInDays === 0 ? 1 : differenceInDays;
};

const propertiesResolvers = {
  Query: {
    properties: () => Property.find().populate("options"),
    property: async (parent, { id }) => {
      let property = await Property.findById(id)
        .populate("options")
        .populate("reservations");
      property = property.toObject({ virtuals: true });
      const reservations = parseReservations(property.reservations);
      property.reservations = reservations;
      return property;
    },
  },
};

module.exports = {
  propertiesResolvers,
};
