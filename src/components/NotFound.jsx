import { useEffect, useState } from "react";

export default function NotFound() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "." : d + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.page}>
      {/* Subtle background blobs */}
      <div style={{ ...styles.blob, top: "10%", left: "5%", background: "#7c3aed33" }} />
      <div style={{ ...styles.blob, bottom: "15%", right: "8%", background: "#2563eb22", width: 320, height: 320 }} />

      <div style={styles.card}>
        {/* Top pill badge */}
        <div style={styles.badge}>404</div>

        {/* Big glitchy number */}
        <div style={styles.bigNumber}>
          <span style={styles.glitch} data-text="4">4</span>
          <span style={{ ...styles.glitch, ...styles.zero }} data-text="0">0</span>
          <span style={styles.glitch} data-text="4">4</span>
        </div>

        <h1 style={styles.heading}>Page not found{dots}</h1>
        <p style={styles.sub}>
          Bro this URL doesn't exist 💀 <br />
          You cooked something wrong or the page ghosted you.
        </p>

        {/* CTA buttons */}
        <div style={styles.btnRow}>
          <a href="/" style={styles.btnPrimary}>← Take me home</a>
          <button onClick={() => window.history.back()} style={styles.btnGhost}>
            Go back
          </button>
        </div>

        {/* Footer hint */}
        <p style={styles.hint}>
          If you think this is a bug, check your{" "}
          <code style={styles.code}>vercel.json</code> rewrites.
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #0a0a0f; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }

        @keyframes glitch {
          0%, 90%, 100% { text-shadow: none; transform: none; }
          91%  { text-shadow: 3px 0 #7c3aed, -3px 0 #2563eb; transform: skewX(-2deg); }
          93%  { text-shadow: -4px 0 #7c3aed,  4px 0 #2563eb; transform: skewX(2deg); }
          95%  { text-shadow: 2px 0 #7c3aed,  -2px 0 #2563eb; transform: none; }
          97%  { text-shadow: none; transform: skewX(-1deg); }
        }

        .glitch-char {
          display: inline-block;
          animation: glitch 4s infinite;
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          color: #fff;
        }

        .glitch-char:nth-child(2) { animation-delay: 0.3s; }
        .glitch-char:nth-child(3) { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0a0a0f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Space Grotesk', sans-serif",
    padding: "24px",
    position: "relative",
    overflow: "hidden",
  },
  blob: {
    position: "absolute",
    width: 400,
    height: 400,
    borderRadius: "50%",
    filter: "blur(80px)",
    pointerEvents: "none",
    zIndex: 0,
  },
  card: {
    position: "relative",
    zIndex: 1,
    background: "#13131a",
    border: "1px solid #ffffff18",
    borderRadius: 28,
    padding: "48px 56px",
    maxWidth: 520,
    width: "100%",
    textAlign: "center",
    boxShadow: "0 0 0 1px #ffffff08, 0 32px 80px #00000088",
  },
  badge: {
    display: "inline-block",
    background: "#7c3aed22",
    border: "1px solid #7c3aed55",
    color: "#a78bfa",
    borderRadius: 100,
    padding: "4px 16px",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: 3,
    marginBottom: 24,
  },
  bigNumber: {
    fontSize: 120,
    lineHeight: 1,
    marginBottom: 16,
    animation: "float 3s ease-in-out infinite",
  },
  glitch: {},  // handled by className in JSX
  zero: { color: "#7c3aed", margin: "0 4px" },
  heading: {
    fontSize: 22,
    fontWeight: 700,
    color: "#f1f0fe",
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  sub: {
    color: "#6b7280",
    fontSize: 15,
    lineHeight: 1.7,
    marginBottom: 36,
  },
  btnRow: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    marginBottom: 28,
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: "#7c3aed",
    color: "#fff",
    padding: "11px 24px",
    borderRadius: 14,
    fontWeight: 600,
    fontSize: 14,
    textDecoration: "none",
    fontFamily: "'Space Grotesk', sans-serif",
    transition: "background 0.2s",
  },
  btnGhost: {
    background: "transparent",
    color: "#9ca3af",
    border: "1px solid #ffffff18",
    padding: "11px 24px",
    borderRadius: 14,
    fontWeight: 500,
    fontSize: 14,
    cursor: "pointer",
    fontFamily: "'Space Grotesk', sans-serif",
  },
  hint: {
    color: "#374151",
    fontSize: 12,
  },
  code: {
    background: "#1f1f2e",
    border: "1px solid #ffffff12",
    borderRadius: 6,
    padding: "1px 7px",
    fontSize: 11,
    color: "#a78bfa",
    fontFamily: "'Space Mono', monospace",
  },
};
