import database_connection from "../app";
import { Supply } from "../entity/Supply";

const getSuppliers = async (req, res) => {
    // console.log(req.body);
    //get data from request body
    const {
        companyName,
        category,
        sector,
        about
    } : {
        companyName: string;
        category: string;
        sector: string;
        about: string
    } = req.body;
    
    try {
        if(!(companyName && category && sector && about)){
            throw{Error: "Incomplete details"}
        }
        //adding a company to the database
        database_connection.then(async(connection) => {
            let supply = new Supply();
            supply.companyName = companyName;
            supply.category = category;
            supply.sector = sector;
            supply.about = about;

            await connection.manager.save(supply).then((supply) => {
                res.status(200).send({"Company added" : supply.companyName});
            })
            .catch((error) => {
                res.status(402).send(error)
                // console.log(error);
            })
            .catch((error) => {
                if(error.code == "23505"){
                    res.status(400).send({"Error":"Company with the same name was added"});
                }else{
                    res.status(402).send({"Error":"error"})
                    console.log(error);
                }
            })
        })
    } catch (error) {
        res.status(400).send({"Error":"error"})
        console.log(error);
    }
}
export default getSuppliers