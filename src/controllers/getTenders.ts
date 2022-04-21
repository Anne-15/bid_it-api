import database_connection from "../app";

const { Tenders } = require("../entity/Tenders");

const getTenders = async(req, res) => {
    //get data from request body
    console.log(req.body);
    const{
        tenderName,
        services,
        description,
        closingDate
    }:{
        tenderName: string;
        services: string;
        description: string;
        closingDate: string;
    } = req.body
    // console.log(req.body);

    try {
        if(!(tenderName && services && closingDate && description)){
            throw{Error: "Incomplete details"}
        }
        //adding a bid to the database
        database_connection
        .then(async(connection) => {
            let tender = new Tenders();
            tender.tenderName = tenderName;
            tender.services = services;
            tender.description = description;
            tender.closingDate = closingDate;

            await connection.manager.save(tender).then((tender) => {
                res.status(200).send({"bid": tender.tenderName});
            });
        })
        .catch((error) => {
            if(error.code == "23505"){
                res.status(400).send({"Error":"Tender with the same order already exists"});
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