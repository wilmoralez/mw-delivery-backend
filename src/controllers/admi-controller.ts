import { Request, Response } from "express";
import { AdministradorSchema } from "../models/administrador.schema";

export const autenticarAdministradores = (req: Request, res:Response) => {
    const email = req.body.email;
    const password = req.body.password;
  
    AdministradorSchema.findOne({ correo: email, contraseña: password}).then((usuario) => {
      if (usuario) {
        res.send(usuario);
      
      } else {
        res.status(401).send({message:"Email o contraseña incorrectos"});
      }
    }).catch(error => {
      res.status(500).send(error.message);
    });
}
