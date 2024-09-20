const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    }, 
    description : {
        required : true,
        type : String
    }, 
    imageUri : {
        type : String
    }, 
    author : {
        type : String, 
        required : true
    }, 
   
});

const Blogs = mongoose.model('Blogs', blogsSchema);

module.exports = Blogs;