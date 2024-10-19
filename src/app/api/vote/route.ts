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

  const { lkm_id, nomination_id } = await request.json();
  const nomination = "best-favorite-" + nomination_id;

  try {
    // cek data apakah sudah vote
    const { data: checkData } = await axios.get(
      `${BaseURL}api/v1/userVotes/get/${nomination}`
    );

    if (Array.isArray(checkData) && checkData.length > 0) {
      const userHasVoted = checkData.some(
        (vote: any) => vote.user_id === session.user.user_id
      );
      if (userHasVoted) {
        return NextResponse.json(
          { error: "Anda telah melakukan vote pada nominasi LKM ini" },
          { status: 400 }
        );
      }
    } else if (checkData === null) {
      console.log("No votes found for this nomination");
    } else {
      console.error("Unexpected response format:", checkData);
      return NextResponse.json(
        { error: "Terjadi kesalahan saat memeriksa vote" },
        { status: 500 }
      );
    }

    // vote
    const { data: voteData } = await axios.post(
      `${BaseURL}api/v1/userVotes/create`,
      {
        user_id: session.user.user_id,
        lkm_id: lkm_id,
        nomination_id: nomination,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(voteData);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat melakukan vote" },
      { status: 500 }
    );
  }
}
