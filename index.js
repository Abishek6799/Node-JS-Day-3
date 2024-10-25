import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Router/productRouter.js";


dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to API")
});

app.use('/api/product',router)

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server Started");
});