import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/googleSheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, mensagem } = body;

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios: nome, email, mensagem" },
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
      [nome, "-", email, mensagem, data, "contacts"],
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro na API de contato:", error);
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    );
  }
}

