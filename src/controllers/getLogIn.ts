import database_connection from "../app";
import { Sign } from "../entity/SignUp";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getLogIn = async(req, res) => {
    //check if username and password are set
    const { email, password }: {email: string; password: string;} = req.body;
    if(!(email && password)){
        res.status(400).send({Error: "Incomplete details"});
    }

    //get user from database
    database_connection
    .then(async(connection) => {
        let userRep = connection.getRepository(Sign);

        await userRep
        .find({ email: email })
        .then((user) => {
            //password checking
            bcrypt.compare(password, user[0].password).then((result) => {
                if(result == true){
                    //jwt
                    const token = jwt.sign(
                        { fullName: user[0].fullName, email: user[0].email },
                        process.env.JWT_SECRET, 
                        {expiresIn: "1hr"}
                    );
                    //returning token
                    res.setHeader("x-access-token", token);
                    res.send(token);
                }else{
                    res.status(401).send({Error: "Bad credentials"});
                }
            });
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => {
        console.log(error);
        res.status(400).send({Error: "Connection error"});
    })
}
export default getLogIn;