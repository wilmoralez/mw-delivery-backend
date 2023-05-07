import { Request, Response } from "express";
import { ClienteSchema } from "../models/cliente.schema";

export const autenticarUsuario=(req:Request, res:Response)=>{
    const email = req.body.email;
    const password = req.body.password;
  
    ClienteSchema.findOne({ correo: email, contraseña: password}, {nombre: true, apellido: true})
    .then((usuario) => {
      if (usuario) {
        res.send(usuario);
      } else {
        res.status(401).send({message:"Correo o contraseña no valida"});
      }
    }).catch(error => {
      res.status(500).send(error.message);
    });
}

export const postCliente = (req:Request, res:Response) => {
    let nuevoCliente = new ClienteSchema (
        {
            "correo": req.body.email,
            "contraseña": req.body.password, 
            "nombre": req.body.nombre,
            "apellido": req.body.apellido  
        }
    ); 

    nuevoCliente.save()
    .then((cliente)=>{
        res.send('¡Cliente registrado exitosamente!'); 
        res.end(); 
    })
    .catch((error)=>{
        res.send(error); 
        res.end();
    })
}