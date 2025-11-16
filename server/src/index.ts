//Imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import newsRouter from "./routes/news.ts";
import rateLimit from "express-rate-limit";

//Config
dotenv.config();
const app = express();
app.set("trust proxy", 1);

//Rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,     
  max: 100,                    
});

//Midlleware
app.use(express.json());
app.use(cors());
app.use(limiter);

//Routes
app.use("/news", newsRouter);

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
