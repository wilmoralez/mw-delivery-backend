import mongoose from "mongoose";
import { Cliente } from "./cliente.model";

const schema = new mongoose.Schema<Cliente>({
    id: mongoose.Types.ObjectId,
    correo: String,
    contraseña: String,
    nombre: String, 
    apellido: String,
})

export const ClienteSchema = mongoose.model('clientes', schema);