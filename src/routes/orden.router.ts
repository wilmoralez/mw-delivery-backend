import  express  from "express";
import {getOrdenes, postOrden} from "../controllers/orden-controller";

const router = express.Router(); 

router.get("/", getOrdenes); 
router.post("/", postOrden);

export default router;

