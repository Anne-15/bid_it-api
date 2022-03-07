import express from "express";
import getTenders from "../controllers/getTenders";

const router = express.Router();

router.post('/tenders', getTenders);

export {router as createBids} 