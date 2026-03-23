import { useState, useEffect, useRef } from "react";

// ███ CHANGE THIS PASSWORD ███
const SECRET_PASSWORD = import.meta.env.VITE_DEV_PASSWORD;

const BOOT_LINES = [
  "> Initializing secure shell...",
  "> Loading bajpai.dev kernel v2.0...",
  "> Mounting encrypted filesystem...",
  "> Checking auth tokens...",
  "> WARNING: Unauthorized access will be logged.",
  "> Enter password to continue_",
];

const QUICK_LINKS = [
  { label: "GitHub", url: "https://github.com", icon: "⬡" },
  { label: "Vercel Dashboard", url: "https://vercel.com/dashboard", icon: "▲" },
  { label: "bajpai.dev", url: "https://bajpai.dev", icon: "◈" },
  { label: "npm", url: "https://npmjs.com", icon: "⬡" },
  { label: "MDN Docs", url: "https://developer.mozilla.org", icon: "◎" },
  { label: "Tailwind Docs", url: "https://tailwindcss.com/docs", icon: "◈" },
];

const EASTER_EGGS = [
  "🤫 if you're reading this you're a nerd (based)",
  "💀 this page doesn't exist... or does it?",
  "🧠 fun fact: arjun built this at age 12",
  "⚡ powered by chai and late night debugging sessions",
  "🎯 you found the secret. congrats you're built different",
];

const SITE_STATS = [
  { label: "Components", value: "6", unit: "files" },
  { label: "Stack", value: "React + Vite", unit: "" },
  { label: "Deploy", value: "Vercel", unit: "" },
  { label: "Domain", value: "bajpai.dev", unit: "" },
  { label: "Status", value: "🟢 LIVE", unit: "" },
  { label: "Secret pages", value: "1", unit: "found" },
];

export default function DevPortal() {
  const [phase, setPhase] = useState("boot"); // boot | auth | portal
  const [bootLines, setBootLines] = useState([]);
  const [input, setInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [shake, setShake] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [termInput, setTermInput] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [eggIndex, setEggIndex] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const inputRef = useRef(null);
  const termRef = useRef(null);
  const termInputRef = useRef(null);

  // Cursor blink
  useEffect(() => {
    const t = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(t);
  }, []);

  // Boot sequence
  useEffect(() => {
    if (phase !== "boot") return;
    let i = 0;
    const run = () => {
      if (i < BOOT_LINES.length) {
        setBootLines(l => [...l, BOOT_LINES[i]]);
        i++;
        setTimeout(run, 320 + Math.random() * 180);
      } else {
        setTimeout(() => setPhase("auth"), 400);
      }
    };
    setTimeout(run, 300);
  }, [phase]);

  // Rotate easter eggs
  useEffect(() => {
    if (phase !== "portal") return;
    const t = setInterval(() => setEggIndex(i => (i + 1) % EASTER_EGGS.length), 4000);
    return () => clearInterval(t);
  }, [phase]);

  // Glitch effect randomly
  useEffect(() => {
    if (phase !== "portal") return;
    const t = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 7000 + Math.random() * 5000);
    return () => clearInterval(t);
  }, [phase]);

  function handleAuth(e) {
    e.preventDefault();
    if (input === SECRET_PASSWORD) {
      setPhase("portal");
      setTerminalLines([
        "Welcome back, Arjun.",
        "Type 'help' for available commands.",
      ]);
    } else {
      setAuthError("ACCESS DENIED — wrong password");
      setShake(true);
      setInput("");
      setTimeout(() => { setShake(false); setAuthError(""); }, 1200);
    }
  }

  function handleTerminal(e) {
    e.preventDefault();
    const cmd = termInput.trim().toLowerCase();
    setTerminalLines(l => [...l, `root@bajpai.dev ~$ ${termInput}`]);
    setTermInput("");

    const responses = {
      help: ["clear", "whoami", "stack", "status", "secret", "exit"].map(c => `  ${c}`).join("\n"),
      whoami: "arjun bajpai — fullstack dev, age 12, based in India 🇮🇳",
      stack: "frontend: React + Vite + Tailwind\nbackend: FastAPI + Express\ndeploy: Vercel + Docker",
      status: "🟢 bajpai.dev — operational\n🟢 API — running\n🟢 Vibes — immaculate",
      secret: "bhai tu already secret page pe hai 💀",
      clear: "__CLEAR__",
      exit: "__EXIT__",
    };

    setTimeout(() => {
      if (cmd === "clear") {
        setTerminalLines(["Terminal cleared."]);
      } else if (cmd === "exit") {
        setPhase("boot");
        setBootLines([]);
        setInput("");
      } else if (responses[cmd]) {
        setTerminalLines(l => [...l, responses[cmd]]);
      } else if (cmd === "") {
        // do nothing
      } else {
        setTerminalLines(l => [...l, `bash: ${cmd}: command not found`]);
      }
    }, 80);
  }

  useEffect(() => {
    if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
  }, [terminalLines]);

  const mono = "'JetBrains Mono', 'Fira Code', 'Courier New', monospace";

  return (
    <div style={{ minHeight: "100vh", background: "#060a06", fontFamily: mono, padding: "0", overflow: "hidden", position: "relative" }}>

      {/* Scanlines overlay */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 10,
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.015) 2px, rgba(0,255,65,0.015) 4px)"
      }} />

      {/* CRT vignette */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 10,
        background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.7) 100%)"
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

        * { box-sizing: border-box; }

        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes flicker { 0%,100%{opacity:1} 92%{opacity:0.97} 94%{opacity:0.85} 96%{opacity:0.97} }
        @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-5px)} 80%{transform:translateX(5px)} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        @keyframes glitch1 { 0%,100%{clip-path:inset(0 0 100% 0)} 50%{clip-path:inset(20% 0 60% 0);transform:translateX(-4px)} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(0,255,65,0.3)} 50%{box-shadow:0 0 0 8px rgba(0,255,65,0)} }

        .terminal-line { animation: fadeIn 0.15s ease forwards; }
        .shake { animation: shake 0.4s ease; }
        .glitch-text { animation: glitch1 0.15s steps(1) forwards; }

        input:focus { outline: none; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0f0a; }
        ::-webkit-scrollbar-thumb { background: #00ff4144; border-radius: 2px; }

        .link-card:hover { background: #00ff4115 !important; border-color: #00ff4166 !important; transform: translateY(-2px); }
        .link-card { transition: all 0.15s ease; }
      `}</style>

      {/* ─── BOOT PHASE ─── */}
      {phase === "boot" && (
        <div style={{ padding: "40px 48px", animation: "flicker 8s infinite" }}>
          <div style={{ color: "#00ff41", fontSize: 13, marginBottom: 32 }}>
            █▀▀ █▀▄ █▀▀ ▀ █▀▀ █▀▀ ▀ █▀▀ ▀ █▀▀ ▀ █▀▀<br />
            ▀▀█ █▀▄ ██▄   ██▄ █▄▄   ▀▀█   █▄█   █▄▄
          </div>
          {bootLines.map((line, i) => (
            <div key={i} className="terminal-line" style={{ color: line.includes("WARNING") ? "#ffcc00" : "#00cc33", fontSize: 13, lineHeight: 2 }}>
              {line}
            </div>
          ))}
        </div>
      )}

      {/* ─── AUTH PHASE ─── */}
      {phase === "auth" && (
        <div style={{ padding: "40px 48px", animation: "flicker 8s infinite" }}>
          {BOOT_LINES.map((line, i) => (
            <div key={i} style={{ color: line.includes("WARNING") ? "#ffcc00" : "#00cc33", fontSize: 13, lineHeight: 2 }}>
              {line}
            </div>
          ))}

          <div style={{ marginTop: 24, borderTop: "1px solid #00ff4133", paddingTop: 24 }}>
            <div style={{ color: "#00ff41", fontSize: 13, marginBottom: 16 }}>
              ┌─[ AUTHENTICATION REQUIRED ]─────────────────────┐
            </div>

            <form onSubmit={handleAuth} className={shake ? "shake" : ""}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#00ff41", fontSize: 13 }}>root@bajpai.dev ~$</span>
                <input
                  ref={inputRef}
                  autoFocus
                  type="password"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="enter password_"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#00ff41",
                    fontSize: 13,
                    fontFamily: mono,
                    flex: 1,
                    caretColor: "#00ff41",
                    letterSpacing: 2,
                  }}
                />
              </div>
              {authError && (
                <div style={{ color: "#ff4444", fontSize: 12, marginTop: 12, animation: "fadeIn 0.1s ease" }}>
                  ✗ {authError}
                </div>
              )}
            </form>

            <div style={{ color: "#00ff4155", fontSize: 11, marginTop: 24 }}>
              └──────────────────────────────────────────────────┘
            </div>
          </div>
        </div>
      )}

      {/* ─── PORTAL PHASE ─── */}
      {phase === "portal" && (
        <div style={{ padding: "32px 40px", animation: "flicker 12s infinite" }}>

          {/* Header */}
          <div style={{ borderBottom: "1px solid #00ff4133", paddingBottom: 20, marginBottom: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ color: "#00ff41", fontSize: 18, fontWeight: 700, letterSpacing: 3 }} className={glitch ? "glitch-text" : ""}>
                  ░▒▓ DEV PORTAL ▓▒░
                </div>
                <div style={{ color: "#00cc3388", fontSize: 11, marginTop: 4 }}>
                  bajpai.dev — restricted access — session active
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "#00ff41", fontSize: 11 }}>
                  {new Date().toLocaleTimeString("en-IN", { hour12: false })}
                </div>
                <div style={{ color: "#00cc3388", fontSize: 10, marginTop: 2 }}>
                  {new Date().toLocaleDateString("en-IN")}
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

            {/* LEFT COLUMN */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

              {/* Site Stats */}
              <div style={{ border: "1px solid #00ff4133", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ color: "#00ff41", fontSize: 11, letterSpacing: 3, marginBottom: 14 }}>
                  ◈ SITE STATS
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 0" }}>
                  {SITE_STATS.map((s, i) => (
                    <div key={i} style={{ fontSize: 12 }}>
                      <span style={{ color: "#00ff4166" }}>{s.label}: </span>
                      <span style={{ color: "#00ff41" }}>{s.value}</span>
                      {s.unit && <span style={{ color: "#00ff4144", fontSize: 10 }}> {s.unit}</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div style={{ border: "1px solid #00ff4133", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ color: "#00ff41", fontSize: 11, letterSpacing: 3, marginBottom: 14 }}>
                  ◈ QUICK LINKS
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {QUICK_LINKS.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="link-card"
                      style={{
                        display: "flex", alignItems: "center", gap: 8,
                        background: "#00ff410a", border: "1px solid #00ff4122",
                        borderRadius: 8, padding: "8px 12px",
                        color: "#00cc33", textDecoration: "none", fontSize: 12,
                      }}
                    >
                      <span style={{ color: "#00ff41", fontSize: 10 }}>{link.icon}</span>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Easter Egg */}
              <div style={{
                border: "1px solid #ffcc0033", borderRadius: 12,
                padding: "14px 18px", background: "#ffcc000a",
                animation: "pulse 4s ease infinite",
              }}>
                <div style={{ color: "#ffcc00", fontSize: 11, letterSpacing: 3, marginBottom: 8 }}>
                  ◈ SECRET LOG
                </div>
                <div style={{ color: "#ffcc00cc", fontSize: 12, transition: "all 0.3s" }}>
                  {EASTER_EGGS[eggIndex]}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — Terminal */}
            <div style={{ border: "1px solid #00ff4133", borderRadius: 12, padding: "18px 20px", display: "flex", flexDirection: "column", height: 420 }}>
              <div style={{ color: "#00ff41", fontSize: 11, letterSpacing: 3, marginBottom: 14 }}>
                ◈ LIVE TERMINAL
              </div>

              {/* Output */}
              <div
                ref={termRef}
                style={{
                  flex: 1, overflowY: "auto", marginBottom: 12,
                  display: "flex", flexDirection: "column", gap: 4,
                }}
              >
                {terminalLines.map((line, i) => (
                  <div key={i} className="terminal-line" style={{
                    color: line.startsWith("root@") ? "#00ff41" : line.includes("not found") ? "#ff6666" : "#00cc33",
                    fontSize: 12, lineHeight: 1.6, whiteSpace: "pre-wrap",
                  }}>
                    {line}
                  </div>
                ))}
              </div>

              {/* Input */}
              <form onSubmit={handleTerminal} style={{ display: "flex", alignItems: "center", gap: 8, borderTop: "1px solid #00ff4122", paddingTop: 10 }}>
                <span style={{ color: "#00ff41", fontSize: 12, whiteSpace: "nowrap" }}>root@bajpai.dev ~$</span>
                <input
                  ref={termInputRef}
                  value={termInput}
                  onChange={e => setTermInput(e.target.value)}
                  autoFocus
                  style={{
                    background: "transparent", border: "none",
                    color: "#00ff41", fontSize: 12,
                    fontFamily: mono, flex: 1, caretColor: "#00ff41",
                  }}
                />
                <span style={{ color: "#00ff41", opacity: cursorVisible ? 1 : 0, fontSize: 14 }}>█</span>
              </form>
            </div>

          </div>

          {/* Footer */}
          <div style={{ marginTop: 24, borderTop: "1px solid #00ff4122", paddingTop: 16, display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#00ff4144", fontSize: 11 }}>
              type 'exit' in terminal to logout
            </span>
            <span style={{ color: "#00ff4144", fontSize: 11 }}>
              bajpai.dev © {new Date().getFullYear()} — all rights reserved
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
