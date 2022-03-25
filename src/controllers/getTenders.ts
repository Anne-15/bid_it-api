import database_connection from "../app";

const { Tenders } = require("../entity/Tenders");

const getTenders = async(req, res) => {
    //get data from request body
    const{
        tenderName,
        services,
        closingDate
    }:{
        tenderName: string;
        services: string;
        closingDate: string;
    } = req.body
    // console.log(req.body);

    try {
        if(!(tenderName && services && closingDate)){
            throw{Error: "Incomplete details"}
        }
        //adding a bid to the database
        database_connection
        .then(async(connection) => {
            let tender = new Tenders();
            tender.tenderName = tenderName;
            tender.services = services;
            tender.closingDate = closingDate;

            await connection.manager.save(tender).then((tender) => {
                res.status(200).send({"Bid added ": tender.tenderName});
            });
        })
        .catch((error) => {
            if(error.code == "23505"){
                res.status(400).send({"Error":"Tender with the same name was added"});
            }else{
                res.status(402).send({"Error":"error"})
                console.log(error);
            }
        })
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
    
}
export default getTenders