var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type:String
    },
    email: {
        type: String,
    },
    password: {
        type:String
    },
    phoneNumber:{
        type:String
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);