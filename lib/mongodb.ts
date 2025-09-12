import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);
const mongodbPromise = client.connect();

export async function dataBase() {
  const client = await mongodbPromise;
  return client.db("tech_talks_DB");
}

export default mongodbPromise;
