import express from "express";
import {getEmpresa} from "../controllers/empresa-controller"; 

const router = express.Router();

router.get("/:cod", getEmpresa); 

export default router;
