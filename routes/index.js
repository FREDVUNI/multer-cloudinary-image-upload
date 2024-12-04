const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const blog = require("../models/blogSchema");
const cloudinary = require("cloudinary").v2;
const {
  HomeController,
  PostController,
  SinglePostController,
} = require("../controllers");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const mimeTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif"];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (mimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only images are allowed!"));
  }
};

const upload = multer({ storage, fileFilter });

router.get("/", HomeController);
router.get("/create", PostController);
router.get("/:id", SinglePostController);

router.post("/create", upload.single("coverImage"), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error("File upload failed. No file provided.");
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "blogcloudinary",
    });

    const post = new blog({
      title: req.body.title,
      description: req.body.description,
      coverImage: req.file.filename,
      imageUrl: result.secure_url,
    });

    await post.save();
    res.redirect("/");
  } catch (error) {
    console.error("Error:", error);

    res.render("post", {
      errorMsg: error.message || "There was an error creating the post.",
    });
  }
});

module.exports = router;
