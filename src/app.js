import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
const app = express();

app.use(cors({
    origin: "process.env.CORS_ORIGIN",
    credentials: true
}));


app.use(express.json({
    limit: "16kb"
}));
// for file we use multer

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
// the public with temp folder in it
app.use(express.static("public"));

app.use(cookieParser());




export default app;