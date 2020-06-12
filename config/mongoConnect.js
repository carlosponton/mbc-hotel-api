var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://carlosponton:Coraltech2019@cluster0-zeamw.mongodb.net/Hotel?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Mongo connect success")
});