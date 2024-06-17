// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { UserInfo } from "../../../models/UserInfo";
import dotenv from "dotenv";

// Load .env file
dotenv.config({ path: "src/.env" });

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const { name, image, ...otherUserInfo } = data;

  const session = await getServerSession(authOptions);
  const email = session.user.email;

  //update user name
  await User.updateOne({ email }, { name, image });

  await UserInfo.findOneAndUpdate({ email }, otherUserInfo, { upsert: true });

  return Response.json(true);
}

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!email) {
    return Response.json({});
  }
  const user = await User.findOne({ email }).lean();
  const userInfo = await UserInfo.findOne({ email }).lean();
  return Response.json({ ...user, ...userInfo });
}
