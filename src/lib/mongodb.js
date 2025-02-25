import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;  // Récupère l'URL MongoDB depuis .env
let client;
let clientPromise;

if (!process.env.MONGO_URI) {
    throw new Error("⚠️ MONGO_URI est manquant dans .env.local !");
}

if (process.env.NODE_ENV === "development") {
    // Stocker la connexion dans une variable globale pour éviter les recharges
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // En production, créer une nouvelle connexion
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export default clientPromise;
