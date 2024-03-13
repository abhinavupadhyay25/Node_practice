import { MongoClient } from "mongodb";

export async function connectToCluster() {
  let client;
  try {
    client = new MongoClient(process.env.DB_URI);
    await client.connect();
    console.log("connection successful...");
    return client;
  } catch (error) {
    console.log("connection failed ...", error);
    process.exit();
  } finally {
    client.close();
  }
}
