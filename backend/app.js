import express from "express";
import cors from 'cors'
import { config } from 'dotenv'
import { serverRoute } from "./route/index.js";
import  mongooseDB  from "./mongoose/index.js";
import middleware from "./middleware/index.js";
// settting variable
let app = express();    
config();
mongooseDB();
const  port = process.env.SERVER_PORT?process.env.SERVER_PORT:8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(middleware);
serverRoute(app);

app.listen(port,function(){
    console.log("we are runing on the ",port)
});