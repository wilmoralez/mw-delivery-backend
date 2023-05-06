import { Request, Response } from "express";
import { EmpresaSchema } from "../models/empresa.schema";

export const getEmpresas = (req: Request, res:Response) => {
    EmpresaSchema.find()
    .then((empresas)=>{
        res.send(empresas); 
        res.end();
    })
    .catch((error)=>{
        res.send(error); 
        res.end();
    })
}