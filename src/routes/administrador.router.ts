import express from "express"; 
import {autenticarAdministradores} from "../controllers/admi-controller"

const router = express.Router();
router.post("/autenticar", autenticarAdministradores);



export default router; 
