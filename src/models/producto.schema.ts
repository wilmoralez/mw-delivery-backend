import mongoose from "mongoose";
import { Producto } from "./producto.model";

const schema = new mongoose.Schema<Producto>({
    id: mongoose.Types.ObjectId, 
    codProducto: String,
    genero: String,
    categoria: String,
    imagen: String, 
    descripcion: String,
    precio: Number, 
})

export const ProductoSchema = mongoose.model('productos', schema);