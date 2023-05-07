import mongoose from "mongoose";
import { Motorista } from "./motorista.model";

const schema = new mongoose.Schema<Motorista>({
    id: mongoose.Types.ObjectId,
    correo: String,
    contraseña: String, 
    nombre: String, 
    apellido: String,
    dni: String,
    telefono: String,
    direccion: String,
    ciudad: String,
    licencia : String,
    placa : String,
    experiencia: String,
    disponibilidad: String,
    aprobacion: Boolean
})

export const MotoristaSchema = mongoose.model('motoristas', schema);