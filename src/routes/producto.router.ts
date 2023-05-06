import express from "express";
import {getProductos} from "../controllers/producto-controller";

const router = express.Router(); 

router.get("/:cod", getProductos); 

export default router; 