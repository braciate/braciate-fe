import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const BaseURL = process.env.NEXT_PUBLIC_API_URL_DEV;

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const type = "0";

  try {
    const { data } = await axios.get(`${BaseURL}api/v1/lkms/get/${id}/${type}`);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching items:", error);

    return NextResponse.json(
      { error: "An error occurred while fetching items" },
      { status: 500 }
    );
  }
}
