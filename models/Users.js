const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        require : true,
        type  : String,
    }, 
    email : {
        require : true,
        type : String,
    },
    age : {
        require : true,
        type : Number,
    }
})

const Users = mongoose.model('Users', userSchema);

module.exports = Users;