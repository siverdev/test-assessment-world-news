//Imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import newsRouter from "./routes/news.ts";

//Config
dotenv.config();
const app = express();

//Midleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/news", newsRouter);

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
