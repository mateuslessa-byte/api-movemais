import mongoose from "mongoose";

async function conectaNaDatabase():promise<typeof mongoose.connection>{
    const dbURI = Process.env.DB_CONNECTION_STRING;

    if(!dbURI){
        throw new  Error(
            "Variavel não encontrada no arquivo .env",
        );

    }

    await mongoose.connect(dbURI)

    return mongoose.connection;
    
}

export default conectaNaDatabase;