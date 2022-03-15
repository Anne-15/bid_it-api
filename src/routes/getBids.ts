import express from "express";
import getSuppliers from "../controllers/getSuppliers";
import getTenders from "../controllers/getTenders";

const router = express.router();

router.post('/tenders', getTenders);
router.get('/suppliers', getSuppliers);

export {router as createBids} 