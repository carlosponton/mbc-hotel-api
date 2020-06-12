const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    title: String,
    photos: [String],
    price: Number,
    options : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Option'
        }
    ],
    availability:[
        {
            from: Date,
            to: Date
        }
    ],
    reservation: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Reservation'
        }
    ]
},{
    timestamps: true
});

const Property = mongoose.model('Property', propertySchema);

module.exports = {
    Property,
};