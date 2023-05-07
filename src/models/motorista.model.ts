import mongoose from "mongoose";

export interface Motorista {
    id: mongoose.Types.ObjectId;
    correo: string;
    contraseña: string; 
    nombre: string; 
    apellido: string;
    dni: string;
    telefono: string;
    direccion: string;
    ciudad: string;
    licencia: string;
    placa: string;
    experiencia: string;
    disponibilidad: string;
    aprobacion:boolean

}