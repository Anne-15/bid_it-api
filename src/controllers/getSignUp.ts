import { passwordStrength } from "check-password-strength";
import bcrypt from "bcrypt";
import database_connection from "../app";
import { Sign } from "../entity/SignUp";

const { SignUp } = require("../entity/Tenders");
let hashpassword: string;

const getSignUp = async(req, res) => {
    //get data from request body
    const{
        fullName,
        email,
        password
    }:{
        fullName: string,
        email: string,
        password: string,
    } = req.body
    try {
        if(!(fullName && email && password)){
            throw{Error: "Incomplete details"}
        }
        //strong password checking
        const strong_pass = passwordStrength(password);
        if(strong_pass.id == 0 || strong_pass.id == 1){
            throw{ Error: "Password is " + strong_pass.value}
        }

        // //encrypt password
        // bcrypt
        // .hash(password, 10)
        // .then((hash) => (hashpassword = hash))
        // .catch((error) => console.log(error));

        //adding a user to the database
        database_connection
        .then(async(connection) => {
            let user = new Sign();
            user.fullName = fullName;
            user.email = email;
            user.password = password;
            user.created = new Date();

            await connection.manager.save(user).then((user) => {
                res.status(200).send({" User created ": user.fullName});
            });
        })
        .catch((error) => {
            //check for duplicate users
            if(error.code == "23505"){
                res.status(400).send({"Error":"User with the same name was added"});
            }else{
                res.status(402).send({"Error":"error"})
                console.log(error);
            }
        });
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
};

//getting a user
const getLoggedUser = async (req, res) => {
    const email = parseInt(req.params.email);
};

export default getSignUp