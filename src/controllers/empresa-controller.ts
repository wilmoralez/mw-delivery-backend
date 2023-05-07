import { Request, Response } from "express";
import { EmpresaSchema } from "../models/empresa.schema";

export const getEmpresa = (req: Request, res:Response) => {
    const cod = req.params.cod
    EmpresaSchema.findOne({codTienda: cod})
    .then((empresas)=>{
        res.send(empresas); 
        res.end();
    })
    .catch((error)=>{
        res.send(error); 
        res.end();
    })
}