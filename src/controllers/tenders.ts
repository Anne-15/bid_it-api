import database_connection from '../app';
import { Tenders } from '../entity/Tenders';

const tenders = (req, res) => {
    try {
        //getting data from the database
       database_connection.then(async(connection) => {
           let tenderRep = connection.getRepository(Tenders);
           await tenderRep
           .find()
           .then((bid) => {
               res.header("Access-Control-Allow-Origin", "*");
               res.send(bid);
            //    console.log(bid);
            })
            .catch((error) => {
                res.status(402).send({"Error": "error"})
                // console.log(error);
            })
        })
        .catch((error) => {
            res.status(402).send({"Error":"error"})
            console.log(error);
        })
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
};
export default tenders;