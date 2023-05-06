import mongoose from "mongoose";
import { Orden, Item } from "./orden.model";

const schema = new mongoose.Schema<Orden>({
    id: mongoose.Types.ObjectId,
    nombreCliente: String, 
    direccion: String, 
    ciudad: String, 
    telefono: String, 
    tienda: String, 
    items: Array<Item>, 
    disponible: Boolean, 
    pendiente: Array<String>,
})

export const OrdenSchema = mongoose.model('ordenes', schema);