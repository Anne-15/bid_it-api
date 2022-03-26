import database_connection from "../app";
import { Suppliers } from "../entity/Suppliers";

const getSuppliers = async(req, res) => {
    //get data from request body
    const {
        companyName,
        category,
        sector
    } : {
        companyName: string;
        category: string;
        sector: string
    } = req.body;
    
    try {
        if(!(companyName && category && sector)){
            throw{Error: "Incomplete details"}
        }
        //adding a company to the database
        database_connection.then(async(connection) => {
            let supply = new Suppliers();
            supply.companyName = companyName;
            supply.category = category;
            supply.sector = sector;

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
        // console.log(error);
    }
}
export default getSuppliers