import mongoose from "mongoose";
import { User } from "./../../../models/User";
import dotenv from "dotenv";

// Load .env file
dotenv.config({ path: "src/.env" });

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
