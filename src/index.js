// require("dotenv").config({ path: "./.env" });

import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";
dotenv.config({
    path: "./.env"
});






connectDB()
.then(() => {
    app.on("error", (error) =>{
        console.error("Error in connecting to app: ", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.error("Error in connecting to database: ", error);
    throw error
})




// try catch for mongoose
// database is always on other continent ie use await async

/*
import express from "express";
const app = express();

;(async() => {
    try {
        await mongoose.connect(`$(process.env.MONGODB_URL)}/${DB_NAME}`);
        app.on("error", (error) => 
            {
                console.error("Error in connecting to app: ", error);
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log(`Server is running on port ${process.env.PORT}`);
            })
    } catch (error) {
        console.error("Error in connecting to database: ", error);
        throw error
    }
})()
*/