import { Request, Response } from "express";
import { ProductoSchema } from "../models/producto.schema";

export const getProductos = (req: Request, res: Response) => {
    const cod = req.params.cod;
    
    ProductoSchema.find({ codProducto: cod })
    .then((productos) => {
        res.send(productos);
        res.end();
    })
    .catch((error) =>{
        res.send(error);
        res.end();
    });
}