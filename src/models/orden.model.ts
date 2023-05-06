import mongoose from "mongoose";

export interface Orden {
    id?: mongoose.Types.ObjectId;
    nombreCliente: string; 
    direccion: string; 
    ciudad: string; 
    telefono: string; 
    tienda: string; 
    items: Array<Item>; 
    disponible: boolean; 
    pendiente: Array<string>;
}

export interface Item {
    cantidad: number; 
    descripcion: string
}