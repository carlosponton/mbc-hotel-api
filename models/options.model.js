const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionsSchema = new Schema({
    name: String
});

const Option = mongoose.model('Option', optionsSchema);

module.exports = {
    Option,
};