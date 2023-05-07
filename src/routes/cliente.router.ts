import express from "express"; 
import {autenticarUsuario, postCliente} from "../controllers/cliente-controller"

const router = express.Router();
router.post("/autenticar", autenticarUsuario);
router.post("/", postCliente);

export default router; 
