import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { username, password } = data;
  console.log("Received login request with username:", username);
  // Here you would typically validate the username and password against your database
  if (username === "admin" && password === "123456") {
    (await cookies()).set("token", "1234567890", {
      maxAge: 60 * 60 * 24,
      httpOnly: true,
    }); // Set a cookie for authentication
    return NextResponse.json({ message: "Login successful" });
  } else {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 },
    );
  }
}

export async function GET(request: NextRequest) {
  const token = (await cookies()).get("token")?.value;
  if (token === "1234567890") {
    return NextResponse.json({ message: "User is authenticated" });
  } else {
    return NextResponse.json(
      { message: "User is not authenticated" },
      { status: 401 },
    );
  }
}
