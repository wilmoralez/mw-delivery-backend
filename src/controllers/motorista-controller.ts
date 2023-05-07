import { Request, Response } from "express";
import { MotoristaSchema } from "../models/motorista.schema";

export const autenticarMotoristas = (req: Request, res:Response) => {
    const email = req.body.email;
    const password = req.body.password;
  
    MotoristaSchema.findOne({ correo: email, contraseña: password, aprobacion:true }).then((usuario) => {
      if (usuario) {
        res.send(usuario);
      
      } else {
        res.status(401).send({message:"Email o contraseña incorrectos"});
      }
    }).catch(error => {
      res.status(500).send(error.message);
    });
}

export const registrarMotoristas=(req: Request, res:Response)=>{
    let nuevoMotorista = new MotoristaSchema (
        {
            correo: req.body.email,
            contraseña: req.body.password, 
            nombre: req.body.nombre, 
            apellido: req.body.apellido,
            dni: req.body.dni,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            ciudad: req.body.ciudad,
            licencia : req.body.licencia,
            placa : req.body.placa,
            experiencia: req.body.experiencia,
            disponibilidad: req.body.disponibilidad,
            aprobacion: req.body.aprobacion

        }
    ); 

    nuevoMotorista.save()
    .then((Motorista)=>{
        res.send('Motorista registrado exitosamente!'); 
        res.end(); 
    })
    .catch((error)=>{
        res.send(error); 
        res.end();
    })
}

export const obtenerMotorista=(req: Request, res: Response)=>{
    MotoristaSchema.findOne({_id: req.params.id})
    .then((result) => {
        
        res.send(result);
        res.end();
        
    })
    .catch((error) => console.error(error));
};

export const obtenerMotoristas=(req: Request, res: Response)=>{
  MotoristaSchema.find({aprobacion: false})
  .then((result) => {
      
      res.send(result);
      res.end();
      
  })
  .catch((error) => console.error(error));
};

export const actualizarMotorista=(req: Request, res: Response)=>{
  MotoristaSchema.updateOne(//(filtro, informacion)
  {
      _id:req.params.id
  }, 
  { 
      aprobacion: true} 
      ).then(
          result=>{
              res.send(result);
              res.end();
              //res.send({codigoResultado:1, mensaje:"Motorista actualizado"});
          }
      ).catch(error=>{
          res.send("Error al actualizar");
          //recomendable para gestionar errores desde base de datos
      });
}

export const eliminarMotorista=(req: Request, res: Response)=>{
  MotoristaSchema.deleteOne(
    {
        _id:req.params.id
    }
).then((result: any)=>{
    res.send(result);
    res.end();
}).catch((error: any)=>{
    res.send(error);
    res.end();
});
}