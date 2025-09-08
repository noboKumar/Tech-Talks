import mongodbPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("Request body:", body);

    const { name, email, password } = body;

    const client = await mongodbPromise;
    const db = client.db("tech_talks_DB");
    const usersCollection = db.collection("users");

    // check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 422 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // add new user to database
    const newUser = await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "User registered", userId: newUser.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
