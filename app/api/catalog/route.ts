import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/googleSheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { whatsapp } = body;

    if (!whatsapp) {
      return NextResponse.json(
        { error: "Campo obrigatório: whatsapp" },
        { status: 400 }
      );
    }

    const data = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    await appendToSheet([
      ["-", whatsapp, "-", "-", data, "contacts"],
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro na API de catálogo:", error);
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    );
  }
}

