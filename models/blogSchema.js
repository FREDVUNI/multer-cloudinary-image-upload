const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    description:{ 
        type:String
    },
    coverImage:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String
    }
},{timestamps:true})

const blog = mongoose.model("posts",blogSchema)

module.exports = blog