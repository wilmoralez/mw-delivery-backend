import express from "express"; 
import {autenticarMotoristas, registrarMotoristas, obtenerMotorista, obtenerMotoristas, actualizarMotorista, eliminarMotorista} from "../controllers/motorista-controller"

const router = express.Router();
router.post("/autenticar", autenticarMotoristas);
router.post("/registrar", registrarMotoristas);
router.post("/:id", obtenerMotorista);
router.get("/", obtenerMotoristas);
router.put("/:id", actualizarMotorista);
router.delete("/:id", eliminarMotorista);


export default router; 
