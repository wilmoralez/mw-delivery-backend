import mongoose from "mongoose";

import { Administrador } from "./administrador.model";

const schema = new mongoose.Schema<Administrador>({
    id: mongoose.Types.ObjectId,
    correo: String,
    contraseña: String, 
    nombre: String, 
    apellido: String
})

export const AdministradorSchema = mongoose.model('administradores', schema);