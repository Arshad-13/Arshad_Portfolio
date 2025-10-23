import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const endpoint = process.env.GOOGLE_SCRIPT_ENDPOINT;

    if (!endpoint) {
      return NextResponse.json(
        { error: "Missing Google Apps Script endpoint configuration." },
        { status: 500 }
      );
    }

    const payload = await request.json();

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google Apps Script error:", errorText);
      return NextResponse.json(
        { error: "Failed to forward form submission." },
        { status: 502 }
      );
    }

    let data;
    try {
      data = await response.json();
    } catch {
      data = { ok: true };
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Unexpected server error. Please try again later." },
      { status: 500 }
    );
  }
}
