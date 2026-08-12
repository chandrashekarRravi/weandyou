import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const SYSTEM_PROMPT = `You are the WE&YOU Marketing assistant — a sharp, friendly, and knowledgeable AI for WE&YOU Marketing, a full-service digital marketing agency based in Bangalore, India.

COMPANY:
- Name: WE & YOU Marketing
- Website: weandyoumarketing.com
- Location: Bangalore, Karnataka, India (serves clients pan-India)
- WhatsApp: +91 6364893295
- Email: info@weandyoumarketing.com
- Team: "Incredible13" — a team of 13 specialists

SERVICES:
1. Social Media Management — Instagram, Facebook, LinkedIn, YouTube content, reels, community management
2. Paid Advertising — Google Ads, Meta Ads, ROI-focused campaigns
3. Photo & Video Production — Brand shoots, reels, ad creatives
4. Content Production — Graphics, scripts, carousels, brand content
5. Website Development — Business websites, e-commerce, fast + SEO-optimized
6. App Development — iOS & Android apps, custom software
7. Influencer Marketing — Nano to macro, end-to-end campaign management
8. SEO Optimization — Audits, keyword research, on-page, technical SEO

RULES:
- Be warm, confident, and concise — max 2-3 sentences per reply
- Plain text only — no markdown, no bullet points
- For pricing questions: "Our packages are tailored to your goals. Let's do a quick free call for a custom quote!"
- For vague/unknown questions: "Great question! Our team can answer that directly — share your number and we'll connect on WhatsApp!"
- Gently push interested users toward sharing their WhatsApp number`;

type Role = 'user' | 'model';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
      return NextResponse.json({
        reply: "The AI assistant isn't configured yet. Meanwhile, our team is on WhatsApp — tap 'Connect on WhatsApp' below!",
      });
    }

    const { messages } = await req.json() as { messages: { role: string; text: string }[] };
    if (!messages?.length) {
      return NextResponse.json({ reply: 'Ask me anything about WE&YOU!' });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Filter out leading bot messages so we start with a user turn
    const contents = messages
      .map(m => ({
        role: m.role === 'user' ? 'user' : ('model' as const),
        parts: [{ text: m.text }],
      }))
      .filter((_, i, arr) => {
        const firstUserIdx = arr.findIndex(c => c.role === 'user');
        return i >= firstUserIdx;
      });

    if (!contents.length) {
      return NextResponse.json({ reply: "Ask me anything about WE&YOU's services!" });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-flash-latest',
      config: { 
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7 
      },
      contents,
    });

    const text = response.text?.trim() || "Our team can best answer that! Tap 'Connect on WhatsApp' to reach us directly.";
    return NextResponse.json({ reply: text });
  } catch (err: any) {
    console.error('[/api/chat]', err?.message ?? err);
    return NextResponse.json({
      reply: "I'm having trouble connecting right now. Tap 'Connect on WhatsApp' to reach our team directly!",
    });
  }
}
