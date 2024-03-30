// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"
dotenv.config({
    path: './.env'
})
const app=express()


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is running at PORT : ${process.env.PORT}`)

    })
})
    .catch((error)=>{
        console.log("MONGO db connection failed !!!",error);
    })



// import { Express } from "express";
// const app =express()

// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URi}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("ERRR: ",error)
//         throw error
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on PORT ${process.env.PORT}`);
//        })
//     }
//     catch(error){
//         console.error("ERROR: ",error)
//         throw err
//     }
// })