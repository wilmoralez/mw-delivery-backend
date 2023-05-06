import mongoose from "mongoose";

export interface Producto{
    id?: mongoose.Types.ObjectId; 
    codProducto: string;
    genero: string;
    categoria: string;
    imagen: string; 
    descripcion: string;
    precio: number; 
}