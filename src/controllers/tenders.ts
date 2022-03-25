import jwt from 'jsonwebtoken';
import database_connection from '../app';
import { Tenders } from '../entity/Tenders';

const tenders = (req, res) => {
    try {
       database_connection.then(async(connection) => {
           let tenderRep = connection.getRepository(Tenders);
           await tenderRep
           .find()
           .then((bid) => {
               const {
                   id,
                   tenderName,
                   services,
                   closingDate
               }: {id: number; tenderName: string; services: string; closingDate: Date} = bid[0];
               
               const loggedTender = {id, tenderName, services, closingDate};
               res.send(loggedTender);
            });
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