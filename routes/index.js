const express = require("express")
const multer = require("multer")
const path = require("path")
const router = express.Router()
const blog = require("../models/blogSchema")
const cloudinary = require("cloudinary")
const {HomeController,PostController,SinglePostController} = require("../controllers")

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
})

const mimeTypes = ['images/png','images/jpg','images/gif']

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{  
        cb(null,"public/uploads")
    },
    fileFilter:(req,file,cb)=>{
        cb(null,mimeTypes.includes(file.mimetype))
    },
    filename:(req,file,cb) =>{
        cb(null,new Date().getTime() + path.extname(file.originalname))
    }
})

const upload = multer({storage})

router.get("/",HomeController)
router.get("/create",PostController)
router.get("/:id",SinglePostController)

router.post("/create",upload.single("coverImage"),async(req,res)=>{
    try{
        const fileName = req.file != null ? req.file.filename:null
        const result = await cloudinary.v2.uploader.upload(req.file.path)

        const post = await new blog({
            title:req.body.title,
            description:req.body.description,
            coverImage:fileName,
            imageUrl:result.url
        })
        await post.save() 
        res.redirect("/")
    }
    catch(error){
        res.render({
            errorMsg: error.message || `There was an error.`
        })
        console.log(error.message)
    }
})

module.exports = router

