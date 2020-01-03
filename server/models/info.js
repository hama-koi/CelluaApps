var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Info = new Schema({
    message: {type: String}
});

module.exports = mongoose.model('info', Info);