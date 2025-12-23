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

    // Basic Input Validation
    const { name, email, message } = payload;
    
    if (!name || typeof name !== 'string' || name.length > 100) {
      return NextResponse.json({ error: "Invalid name provided." }, { status: 400 });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 100) {
      return NextResponse.json({ error: "Invalid email provided." }, { status: 400 });
    }
    
    if (!message || typeof message !== 'string' || message.length > 5000) {
      return NextResponse.json({ error: "Invalid message provided." }, { status: 400 });
    }

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
