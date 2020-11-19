var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type:String
    },
    username: {
        type: String,
    },
    password: {
        type:String
    },
    phoneNumber:{
        type:String
    },

});


module.exports = mongoose.model('User', User);