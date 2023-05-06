import mongoose from "mongoose";

export interface Categoria {
    id?: mongoose.Types.ObjectId; 
    codTienda: string; 
    categorias: Array<Genero>;
}

export interface Genero{
    genero: string;
    portada: string; 
    ropa: string; 
    zapatos:string; 
    accesorios: string;
}