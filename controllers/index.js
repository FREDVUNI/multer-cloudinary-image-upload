const blog = require("../models/blogSchema") 

const HomeController = async(req,res) =>{
    try{
        const posts = await blog.find()
        .sort({createdAt:-1})
        res.render('../views/index',{posts})
    }
    catch(error){
        console.log(error.message)
    }
}
  
const PostController = async(req,res) =>{
    try{
        res.render('../views/add')
    }
    catch(error){
        console.log(error.message)
    }
}

const SinglePostController = async(req,res) =>{
    try{
        const post = await blog.findById(req.params.id)
        
        if(post){
            res.render('../views/post',{post})
        }else{
            res.redirect("/")
        }
    }
    catch(error){
        console.log(error.message)
    }

}

module.exports ={HomeController,PostController,SinglePostController}