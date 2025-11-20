import { google } from "googleapis";

export async function appendToSheet(values: (string | number)[][]) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: process.env.GS_TYPE,
        project_id: process.env.GS_PROJECT_ID,
        private_key_id: process.env.GS_PRIVATE_KEY_ID,
        private_key: process.env.GS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        client_email: process.env.GS_CLIENT_EMAIL,
        client_id: process.env.GS_CLIENT_ID,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GS_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error("GS_SHEET_ID não configurado");
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:A",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Erro ao inserir dados no Google Sheets:", error);
    throw error;
  }
}

