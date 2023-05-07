import mongoose from "mongoose";

export interface Cliente {
    id: mongoose.Types.ObjectId;
    correo: string;
    contraseña: string; 
    nombre: string; 
    apellido: string;
    direccion: string;
    telefono: string;
}

