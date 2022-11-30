import express from 'express';
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
const app = express();

const DB_CONNECTION_STRING = "mongodb+srv://giuseppi:supersecretpassword@cluster0.lorvya8.mongodb.net/?retryWrites=true&w=majority"

import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);
// load the mongoose library
// connect to the tuiter database


app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);