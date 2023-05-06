import mongoose from "mongoose";
import { Categoria, Genero } from "./categoria.model";

const schema = new mongoose.Schema<Categoria>({
    id: mongoose.Types.ObjectId,
    codTienda: String,
    categorias: Array<Genero>,
})

export const CategoriaSchema = mongoose.model('categorias', schema);