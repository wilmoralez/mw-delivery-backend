import { Request, Response } from "express";
import { CategoriaSchema } from "../models/categoria.schema";

export const getCategoriasGenero = (req: Request, res:Response) => {
    const cod = req.params.cod;
    
    CategoriaSchema.findOne({codTienda: cod})
    .then((categorias)=>{
        res.send(categorias); 
        res.end();
    })
    .catch((error)=>{
        res.send(error); 
        res.end();
    })
}