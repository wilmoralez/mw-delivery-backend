import mongoose from "mongoose";

export interface Administrador {
    id: mongoose.Types.ObjectId;
    correo: string;
    contraseña: string; 
    nombre: string; 
    apellido: string;
    

}