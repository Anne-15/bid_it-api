import "reflect-metadata";
import express = require("express");
import { createConnection } from "typeorm";
import getSuppliers from "./controllers/getSuppliers";
import getTenders from "./controllers/getTenders";
import getSignUp from "./controllers/getSignUp";
import getLogIn from "./controllers/getLogIn";
import getUsers from "./controllers/getUsers";
import tenders from "./controllers/tenders";

const app = express();
const PORT = 5000;

//database connection
const database_connection = createConnection();
console.log("database connected!!")
export default database_connection;

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send("An IT BID blog website");
})

//import routes
app.get('/suppliers', getSuppliers);
app.post('/tenders', getTenders);
app.get('/tenders/list', tenders);
app.post('/signup', getSignUp);
app.post('/login', getLogIn);
app.get('/users', getUsers);

//server
app.listen(PORT, () => console.log(`The server is connected at port http://localhost:${PORT}`))