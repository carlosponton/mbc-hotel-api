const { Reservation, Property, User } = require("../models");
const nodemailer = require("nodemailer");

const sendEmail = (id, from, to, property) => {
  User.findById(id).then((user) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "carlos.ponton2@gmail.com",
        pass: "Wamas123",
      },
    });

    const mailOptions = {
      from: "carlos.ponton2@gmail.com",
      to: user.email,
      subject: "Reservación éxitosa",
      text: `${property.title}
      Llegada: ${from}
      Salida: ${to}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });
};

const reservationsResolvers = {
  Mutation: {
    reservation: async (parent, { reservation: { id, from, to } }, context) => {
      const reservation = await Reservation.create({ property: id, from, to });
      const property = await Property.findById(id);
      property.reservations.push(reservation._id);
      await property.save();
      if (reservation) {
        sendEmail(context.user.id, from, to, property);
      }
      return reservation;
    },
  },
};

module.exports = {
  reservationsResolvers,
};
