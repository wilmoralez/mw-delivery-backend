import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import clientesRouter from "./routes/cliente.router";
import empresasRouter from "./routes/empresa.router"; 
import categoriasRouter from "./routes/categoria.router";
import productosRouter from "./routes/producto.router"; 
import ordenesRouter from "./routes/orden.router";

import { Database } from "./utils/database";
import cors from 'cors';


dotenv.config();
const database:Database = new Database();
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

app.use('/clientes', clientesRouter);
app.use('/empresas', empresasRouter);
app.use('/categorias', categoriasRouter);
app.use('/productos', productosRouter); 
app.use('/ordenes', ordenesRouter)

app.listen(port, () => {
	console.log(`⚡️Servidor levantado en https://localhost:${port}`);
});
