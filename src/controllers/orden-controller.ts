import { Request, Response } from "express";
import { OrdenSchema } from "../models/orden.schema";

export const getOrdenes = (req: Request, res:Response) => {
    OrdenSchema.find()
    .then((result)=>{
        res.send(result); 
        res.end();
    })
    .catch((error)=>{
        res.send(error); 
        res.end();
    })
}

export const postOrden = (req:Request, res:Response) => {
    let nuevaOrden = new OrdenSchema (
        {
            "nombreCliente": req.body.nombreCliente,
            "direccion": req.body.direccion, 
            "ciudad": req.body.ciudad,
            "telefono": req.body.telefono,
            "tienda:": req.body.tienda,
            "items":  req.body.items, 
            "disponible" : req.body.disponible,
            "pendiente": req.body.pendiente
        }
    ); 

    nuevaOrden.save()
    .then((orden)=>{
        res.send({Message:'¡Orden lista para ser procesada!', Orden: orden}); 
        res.end(); 
    })
    .catch((error)=>{
        res.send(error); 
        res.end();
    })
}