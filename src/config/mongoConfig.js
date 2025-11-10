import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import config from "./config.js";

let db;

export const mongoConnect = async () => {
  if (db) return db;

  try {
    const client = new MongoClient(config.mongoOptions.url);
    await client.connect();

    console.log("✅ Connected to MongoDB");

    db = client.db();
    return db;
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
};

export const getDB = () => {
  if (!db)
    throw new Error("Database not connected. Call mongoConnect() first.");
  return db;
};

export const mongooseConnect = () => {
  return mongoose.connect(config.mongoOptions.url);
};

// export const mongooseConnect = async () => {
//   try {
//     await mongoose.connect(config.mongoOptions.url);
//     console.log(
//       "✅ Connected to MongoDB via Mongoose:",
//       mongoose.connection.name
//     );
//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err);
//     throw err;
//   }
// };
