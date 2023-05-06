import { Request, Response } from "express";
import { CategoriaSchema } from "../models/categoria.schema";

export const getCategoriasGenero = (req: Request, res:Response) => {
    const cod = req.params.cod;
    CategoriaSchema.find({codTienda: cod}, {categorias: true})
    .then((categorias)=>{
        const portadas: string[][] = categorias.map((categoria) =>
        categoria.categorias.map((item) => item.portada)
      );
        res.send(portadas); 
        res.end();
    })
    .catch((error)=>{
        res.send(error); 
        res.end();
    })
}