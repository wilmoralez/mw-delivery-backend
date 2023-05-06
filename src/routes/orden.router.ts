import  express  from "express";
import {getOrdenes} from "../controllers/orden-controller";

const router = express.Router(); 

router.get("/", getOrdenes); 

export default router;

