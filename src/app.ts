import "reflect-metadata";
import express = require("express");
import { createConnection } from "typeorm";

const app = express();
const PORT = 5000;

//database connection
const database_connection = createConnection();
export default database_connection;
console.log("database connected!!")

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send("An IT BID blog website");
})

//server
app.listen(PORT, () => console.log(`The server is connected at port http://localhost:${PORT}`))