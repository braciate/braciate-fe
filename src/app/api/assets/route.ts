import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import axios from "axios";

const BaseURL = process.env.NEXT_PUBLIC_API_URL_DEV;

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.user_id) {
    return NextResponse.json(
      { error: "User not authenticated" },
      { status: 401 }
    );
  }

  try {
    const { lkm_id, nomination_id, url } = await request.json();
    const validKey = process.env.NEXT_PUBLIC_LKM_KEY;
    const apiKey = request.headers.get("x-api-key");

    if (!apiKey || apiKey !== validKey) {
      return NextResponse.json({ error: "Invalid API key" }, { status: 403 });
    }

    // Send the request to the external API
    const response = await axios.post(
      `${BaseURL}api/v1/assets/create`,
      {
        user_id: session.user.user_id,
        lkm_id,
        nomination_id,
        url,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while creating the asset" },
      { status: 500 }
    );
  }
}
