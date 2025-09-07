import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);
const mongodbPromise = client.connect();

export default mongodbPromise;