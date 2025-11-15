//Imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";


//Config
dotenv.config();
const app = express();

//Midleware
app.use(express.json());
app.use(cors());

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
