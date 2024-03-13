import { config } from "dotenv";
import { connectToCluster } from "./db_config.js";

config();

await connectToCluster();
