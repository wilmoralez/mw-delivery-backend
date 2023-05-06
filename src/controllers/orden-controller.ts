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