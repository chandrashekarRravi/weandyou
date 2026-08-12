import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    
    // If webhook is not set up yet, just return success so the app doesn't break
    if (!webhookUrl || webhookUrl === 'your_webhook_url_here') {
      return NextResponse.json({ success: true, message: 'Webhook not configured' });
    }

    const data = await req.json();
    // Data expected: { timestamp, sessionId, action, message, detail }
    
    // Post to Google Apps Script Webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Google Script returned ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('[/api/log-chat] Error:', err.message);
    return NextResponse.json({ error: 'Failed to log chat' }, { status: 500 });
  }
}
