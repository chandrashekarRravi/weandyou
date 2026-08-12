'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MessageCircle, X, ArrowRight, Sparkles, Send, ChevronLeft } from 'lucide-react';

// ── WhatsApp config ──────────────────────────────────────────────────────────
const WA_NUMBER = '916364893295'; // +91 6364893295

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ── Types ────────────────────────────────────────────────────────────────────
type View = 'bubble' | 'welcome' | 'qa' | 'whatsapp';
interface Msg { role: 'user' | 'bot'; text: string }

// ── Component ────────────────────────────────────────────────────────────────
export const LeadChatWidget = () => {
  const [sessionId] = useState(() => Math.random().toString(36).substring(2, 10));
  const [view, setView] = useState<View>('bubble');
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: 'bot', text: "Hi! 👋 I'm your WE&YOU assistant. Ask me anything about our services, pricing, or how we can grow your business." },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Helper to log events to our API
  const logEvent = useCallback(async (action: string, message: string, detail: string = '') => {
    try {
      await fetch('/api/log-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          sessionId,
          action,
          message,
          detail
        }),
      });
    } catch (e) {
      // silently fail if logging errors out
    }
  }, [sessionId]);

  // Auto-open once per session after 5 s
  useEffect(() => {
    if (sessionStorage.getItem('wey_chat')) return;
    const t = setTimeout(() => {
      setView('welcome');
      sessionStorage.setItem('wey_chat', '1');
      logEvent('Chat Opened', 'Auto-popup after 5s');
    }, 5000);
    return () => clearTimeout(t);
  }, [logEvent]);

  // Scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, loading]);

  // Focus input when entering QA
  useEffect(() => {
    if (view === 'qa') inputRef.current?.focus();
  }, [view]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    const next: Msg[] = [...msgs, { role: 'user', text }];
    setMsgs(next);
    setLoading(true);
    
    // Log user's message
    logEvent('User Message', text);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.map(m => ({ role: m.role, text: m.text })) }),
      });
      const data = await res.json();
      setMsgs(prev => [...prev, { role: 'bot', text: data.reply }]);
      
      // Log AI's reply
      logEvent('AI Reply', data.reply);
    } catch {
      const errorMsg = "Network hiccup! Our team is on WhatsApp — want me to connect you?";
      setMsgs(prev => [...prev, { role: 'bot', text: errorMsg }]);
      logEvent('AI Error', errorMsg);
    } finally {
      setLoading(false);
    }
  }, [input, msgs, loading, logEvent]);

  const openWhatsApp = () => {
    const greeting = name ? `Hi, I'm ${name}. ` : 'Hi! ';
    const msgText = `${greeting}I'm interested in WE&YOU's services. My number is +91 ${phone}. Please get in touch!`;
    
    // Log lead generation
    logEvent('WhatsApp Clicked', 'Lead generated', `Name: ${name || 'N/A'}, Phone: ${phone}`);

    const msg = encodeURIComponent(msgText);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank', 'noopener');
  };

  // ── Bubble ─────────────────────────────────────────────────────────────────
  if (view === 'bubble') {
    return (
      <button
        onClick={() => {
          setView('welcome');
          logEvent('Chat Opened', 'User clicked floating bubble');
        }}
        aria-label="Chat with WE&YOU"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-brand-primary text-black rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(209,224,19,0.35)] hover:scale-110 active:scale-95 transition-transform"
      >
        {/* Ripple */}
        <span className="absolute w-14 h-14 rounded-full bg-brand-primary/40 animate-ping" />
        <MessageCircle className="w-6 h-6 relative z-10" strokeWidth={2.5} />
      </button>
    );
  }

  // ── Panel ──────────────────────────────────────────────────────────────────
  return (
    <div
      role="dialog"
      aria-label="WE&YOU Chat Assistant"
      className="fixed bottom-6 left-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.65)] border border-white/10 animate-[fadeUp_0.3s_ease_both]"
    >
      {/* ── Header ── */}
      <div className="bg-brand-primary px-5 py-3.5 flex items-center gap-3">
        {(view === 'qa' || view === 'whatsapp') && (
          <button onClick={() => setView('welcome')} aria-label="Back" className="text-black/50 hover:text-black transition-colors shrink-0">
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        <div className="w-8 h-8 bg-black/15 rounded-full flex items-center justify-center shrink-0">
          <MessageCircle className="w-4 h-4 text-black" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-display font-bold text-black text-sm leading-none">WE&YOU Assistant</div>
          <div className="text-black/55 text-[11px] font-sans mt-0.5">
            {view === 'qa' ? 'Powered by Gemini AI' : 'Typically replies in minutes'}
          </div>
        </div>
        <button onClick={() => setView('bubble')} aria-label="Close chat" className="text-black/50 hover:text-black transition-colors shrink-0">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* ── Welcome ── */}
      {view === 'welcome' && (
        <div className="bg-[#0b1f30] p-5 space-y-3">
          <p className="text-white/70 text-sm font-sans leading-relaxed">
            👋 Hello! How can we help you grow your business today?
          </p>

          {/* Option 1 — Ask a Question */}
          <button
            onClick={() => setView('qa')}
            className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/8 hover:border-brand-primary/40 hover:bg-white/8 transition-all group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-black transition-all duration-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-display font-bold text-white text-sm">Ask a Question</div>
              <div className="text-white/35 text-xs font-sans mt-0.5">Instant AI answers about our services</div>
            </div>
            <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-brand-primary group-hover:translate-x-1 transition-all shrink-0" />
          </button>

          {/* Option 2 — Connect on WhatsApp */}
          <button
            onClick={() => setView('whatsapp')}
            className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/8 hover:border-[#25D366]/40 hover:bg-white/8 transition-all group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
              {WA_ICON}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-display font-bold text-white text-sm">Connect on WhatsApp</div>
              <div className="text-white/35 text-xs font-sans mt-0.5">Chat directly with our team</div>
            </div>
            <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all shrink-0" />
          </button>
        </div>
      )}

      {/* ── Q&A Chat ── */}
      {view === 'qa' && (
        <div className="bg-[#0b1f30] flex flex-col" style={{ height: 360 }}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[82%] px-4 py-2.5 text-sm font-sans leading-relaxed rounded-2xl ${m.role === 'user'
                    ? 'bg-brand-primary text-black font-semibold rounded-br-sm'
                    : 'bg-white/8 text-white/80 border border-white/8 rounded-bl-sm'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/8 border border-white/8 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '120ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '240ms' }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/8 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about our services…"
              className="flex-1 bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-brand-primary/50 font-sans transition-colors"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              aria-label="Send"
              className="w-10 h-10 bg-brand-primary text-black rounded-xl flex items-center justify-center hover:bg-brand-primary/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── WhatsApp Lead Form ── */}
      {view === 'whatsapp' && (
        <div className="bg-[#0b1f30] p-5 space-y-4">
          <p className="text-white/65 text-sm font-sans leading-relaxed">
            Share your details and our team will reach you on WhatsApp within{' '}
            <span className="text-white font-bold">24 hours</span>.
          </p>

          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-brand-primary/40 font-sans transition-colors"
          />

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35 text-sm font-sans select-none">+91</span>
            <input
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              placeholder="10-digit mobile number"
              className="w-full bg-white/5 border border-white/8 rounded-xl pl-[3.25rem] pr-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-[#25D366]/40 font-sans transition-colors"
            />
          </div>

          <button
            onClick={openWhatsApp}
            disabled={phone.length < 10}
            className="w-full bg-[#25D366] text-white py-3 rounded-xl font-display font-bold text-sm flex items-center justify-center gap-2.5 hover:bg-[#1fbc5a] disabled:opacity-35 disabled:cursor-not-allowed transition-all active:scale-95"
          >
            {WA_ICON}
            Open WhatsApp Chat
          </button>

          <p className="text-white/20 text-xs text-center font-sans">We respect your privacy. No spam, ever.</p>
        </div>
      )}
    </div>
  );
};
