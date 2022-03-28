import database_connection from "../app";
import { Supply } from "../entity/Supply";

const suppliers = async(req, res) => {
    try {
        //getting data from the database
        database_connection.then(async(connection) => {
            let sample = connection.getRepository(Supply);
            await sample
            .find()
            .then((product) => {
                res.send(product);
                console.log(product);
            })
            .catch((error) => {
                res.status(402).send(error);
                // console.log(error);
            })
        })
        .catch((error) => {
            res.status(402).send({"Error":"error"});
            console.log(error);
        })
    } catch (error) {
        res.status(400).send(error);
        console.log(error);   
    }
    
}
export default suppliers