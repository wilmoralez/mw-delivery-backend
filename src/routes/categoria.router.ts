import  express  from "express";
import {getCategoriasGenero} from "../controllers/categoria-controller";

const router = express.Router(); 

router.get("/:cod", getCategoriasGenero); 

export default router;