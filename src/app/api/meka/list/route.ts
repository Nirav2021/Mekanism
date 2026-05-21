import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const res = await fetch(
      `https://meka-react-tasks.netlify.app/resources/contactListData.json`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch list" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching list:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
