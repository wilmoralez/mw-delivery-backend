import mongoose from "mongoose";
import { Empresa } from "./empresa.model";

const schema = new mongoose.Schema<Empresa>({
    id: mongoose.Types.ObjectId, 
    codTienda: String, 
    logo: String,
    descripcion: String,
    calificacion: Number,
})

export const EmpresaSchema = mongoose.model('empresas', schema);