import express from "express"; 
import {autenticarMotoristas, registrarMotoristas, obtenerMotorista} from "../controllers/motorista-controller"

const router = express.Router();
router.post("/autenticar", autenticarMotoristas);
router.post("/registrar", registrarMotoristas);
router.get("/:id", obtenerMotorista);


export default router; 
