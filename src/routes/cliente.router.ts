import express from "express"; 
import {getCredencialesClientes} from "../controllers/cliente-controller"

const router = express.Router();
router.get("/", getCredencialesClientes);

export default router; 
