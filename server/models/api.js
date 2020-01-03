var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
 id: String,
 first_name:String,
 last_name: String,
 age: String,
 sex: String,
 adress: String
});

module.exports = mongoose.model('user', UserSchema);