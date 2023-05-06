import mongoose from "mongoose";

export interface Empresa {
    id?: mongoose.Types.ObjectId; 
    codTienda: string; 
    logo: string;
    descripcion: string;
    calificacion: number;
}
