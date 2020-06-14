const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationsSchema = new Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
  },
  from: Date,
  to: Date,
});

const Reservation = mongoose.model("Reservation", reservationsSchema);

module.exports = {
  Reservation,
};
