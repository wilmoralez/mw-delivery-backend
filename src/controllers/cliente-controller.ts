import { Request, Response } from "express";
import { ClienteSchema } from "../models/cliente.schema";

export const getCredencialesClientes = (req: Request, res:Response) => {
    ClienteSchema.find()
    .then((credenciales)=>{
        res.send(credenciales); 
        res.end();
    })
    .catch((error)=>{
        res.send(error); 
        res.end();
    })
}