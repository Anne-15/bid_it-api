import database_connection from "../app";
import { Suppliers } from "../entity/Suppliers";

const Supply = async(req, res) => {
    try {
        //getting data from the database
        database_connection.then(async(connection) => {
            let supplier = connection.getRepository(Suppliers);
            await supplier
            .find()
            .then((product) => {
                res.send(product);
            })
            .catch((error) => {
                res.status(402).send(error);
            })
            .catch((error) => {
                res.status(402).send({"Error":"error"});
            })
        })
    } catch (error) {
        res.status(400).send(error);
        console.log(error);   
    }
    
}
export default Supply