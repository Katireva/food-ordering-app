// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import dotenv from "dotenv";

// Load .env file
dotenv.config({ path: "src/.env" });

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const session = await getServerSession(authOptions);
  console.log("session route", session);
  const email = session.user.email;

  //update user name
  await User.updateOne({ email }, data);

  return Response.json(true);
}

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  const session = await getServerSession(authOptions);
  const email = session.user.email;
  return Response.json(await User.findOne({ email }));
}
