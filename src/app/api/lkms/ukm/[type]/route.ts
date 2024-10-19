import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL_DEV;

export async function GET(
  request: NextRequest,
  { params }: { params: { type: string } }
) {
  const { type } = params;

  try {
    if (type === "6") {
      const requests = [1, 2, 3, 4, 5].map((t) =>
        axios.get(`${BASE_URL}api/v1/lkms/get/ukm/${t}`)
      );
      const responses = await Promise.all(requests);
      const allData = responses.map((res) => res.data);
      const flattenedData = allData.flat();
      return NextResponse.json(flattenedData);
    } else {
      const response = await axios.get(
        `${BASE_URL}api/v1/lkms/get/ukm/${type}`
      );
      const data = response.data;
      return NextResponse.json(data);
    }
  } catch (error) {
    console.error("Error fetching LKM data:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching items" },
      { status: 500 }
    );
  }
}
