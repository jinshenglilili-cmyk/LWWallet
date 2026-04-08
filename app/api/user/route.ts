import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const id = query.get("id");
  const name = query.get("name");
  console.log("Received GET request with id:", id, "and name:", name);
  return NextResponse.json({ message: "John Doe" });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  return NextResponse.json({ message: "User created", data });
}

export async function PUT(request: NextRequest) {
  const data = await request.json();
  return NextResponse.json({ message: "User updated", data });
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({ message: "User deleted" });
}
