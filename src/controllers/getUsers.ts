import { Sign } from "crypto";
import jwt from "jsonwebtoken";
import database_connection from "../app";

const getUsers = (req,res) => {
    //get user email
    const decodeToken = jwt.decode(req.header("x-access-token"), {
        complete: true,
    });

    database_connection.then(async(connection) => {
        let userRep = connection.getRepository(Sign);
        await userRep
        .find()
        // .then((user) => {
        //     const{ id, fullName, email, created }: { id:number; fullName: string; email: string; created: Date } = user[0];
        //     const loggedUser = {id, fullName, email, created};
        //     res.send(loggedUser);
        // });
    });
}

export default getUsers;