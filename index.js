const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const path = require("path") 
const methodOverride = require("method-override")
const app = express()
const connectDB = require("./database/connection")

app.use(morgan("tiny"))
app.use(methodOverride("_method"))
dotenv.config({path:'.env'})

const PORT = process.env.PORT || 8080

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/",require("./routes"))

app.use("/images",express.static(path.resolve(__dirname,"public/assets/images")))
app.use("/css",express.static(path.resolve(__dirname,"public/assets")))
app.use("/uploads",express.static(path.resolve(__dirname,"public/uploads"))) 

connectDB()
app.listen(PORT,()=>{
    console.log(`server listening on http://localhost:${PORT}`)
})