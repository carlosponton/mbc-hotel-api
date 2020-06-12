const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    title: String, // String is shorthand for {type: String}
    photos: String,
    price: Number,
    options : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Post'
        }
    ],
    availability:[
        {
            from: Date,
            to: Date
        }
    ]
},{
    timestamps: true
});

const Property = mongoose.model('Property', propertySchema);

module.exports = {
    Property,
};