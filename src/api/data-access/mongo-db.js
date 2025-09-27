import config from '../config/backend-config';
import { MongoClient } from "mongodb";

const uri = config.postgresql.uri;
let client;

async function connectDB() {
    if (!client) {
        client = new MongoClient(uri, { useUnifiedTopology: true });
        await client.connect();
        console.log("✅ Connected to MongoDB");
    }
    return client.db(config.postgresql.database);
}

export default connectDB;
