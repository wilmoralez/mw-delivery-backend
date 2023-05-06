import mongoose from 'mongoose';
const bd: string = 'MWFashionDeliverydb'; 
const port: string = '27017';
const host: string = '127.0.0.1';

export class Database{
    constructor(){
        this.conectar(); 
    }

    conectar(){
        mongoose
        .connect(`mongodb://${host}:${port}/${bd}`)
        .then(result=>console.log('Se conectó a mongo'))
        .catch(error=>console.log(error));
    }
}