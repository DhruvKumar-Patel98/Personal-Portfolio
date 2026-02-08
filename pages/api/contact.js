import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    // Parse service account JSON from env
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.SPREADSHEET_ID;

    // Append new row: Name | Email | Message | Timestamp
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:D", // Make sure your sheet name is correct
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [name, email, message, new Date().toLocaleString()],
        ],
      },
    });

    return res.status(200).json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    return res.status(500).json({ success: false, message: "Could not save message." });
  }
}
