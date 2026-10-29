"use client";
export default function Community() {
  const threads = [
    { id: 1, title: "How do I configure multi-language support for Spanish callers?", replies: 14, views: 342, author: "Maria G.", avatar: "MG", tag: "Configuration", tagColor: "#7C5CFF", hot: true },
    { id: 2, title: "Best practices for training custom intent models", replies: 9, views: 215, author: "James K.", avatar: "JK", tag: "AI Models", tagColor: "#3B6EF6", hot: false },
    { id: 3, title: "Integration with Salesforce Service Cloud — step by step guide", replies: 22, views: 680, author: "Priya S.", avatar: "PS", tag: "Integrations", tagColor: "#1FAE7A", hot: true },
    { id: 4, title: "Webinar Recap: Reducing AHT with Sentiment Triggers", replies: 5, views: 189, author: "GBZ Team", avatar: "CZ", tag: "Announcements", tagColor: "#F5A623", hot: false },
    { id: 5, title: "How to export call transcripts in bulk via API?", replies: 8, views: 267, author: "Lena M.", avatar: "LM", tag: "API", tagColor: "#EF5B5B", hot: false },
    { id: 6, title: "Tips for improving agent CSAT scores with GBZ insights", replies: 17, views: 508, author: "Raj P.", avatar: "RP", tag: "Best Practices", tagColor: "#7C5CFF", hot: true },
  ];

  const highlights = [
    { value: "12,400+", label: "Community Members" },
    { value: "3,200+", label: "Discussions" },
    { value: "< 2h", label: "Avg Response Time" },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(160deg, #F6F8FD 0%, #EEF0FA 100%)", fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0A0E2E 0%, #1F1670 50%, #7C5CFF 100%)", padding: "80px 32px 72px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 60%, rgba(59,110,246,0.35) 0%, transparent 55%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "#C9BEFF", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 30, marginBottom: 20 }}>Community</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 14 }}>Join the Conversation</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: 500, margin: "0 auto 28px" }}>Thousands of GBZ users sharing tips, integrations, and best practices.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            {highlights.map((h) => (
              <div key={h.label} style={{ textAlign: "center" }}>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.5rem" }}>{h.value}</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", marginTop: 2 }}>{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px 100px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#10132A" }}>Recent Discussions</h2>
          <a href="#" style={{ background: "linear-gradient(135deg,#7C5CFF,#3B6EF6)", color: "#fff", fontWeight: 700, fontSize: "0.85rem", padding: "10px 20px", borderRadius: 10, textDecoration: "none" }}>+ Start a Thread</a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {threads.map((thread) => (
            <div key={thread.id} style={{ background: "#fff", border: "1px solid #E6E9F5", borderRadius: 16, padding: "20px 24px", boxShadow: "0 4px 12px rgba(16,19,42,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", transition: "box-shadow 0.2s ease" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flex: 1 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg,#7C5CFF,#3B6EF6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "0.75rem", flexShrink: 0 }}>{thread.avatar}</div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
                    <span style={{ background: `${thread.tagColor}18`, color: thread.tagColor, fontSize: "0.7rem", fontWeight: 700, padding: "2px 10px", borderRadius: 30, textTransform: "uppercase", letterSpacing: "0.05em" }}>{thread.tag}</span>
                    {thread.hot && <span style={{ background: "#FEF3C7", color: "#D97706", fontSize: "0.7rem", fontWeight: 700, padding: "2px 10px", borderRadius: 30 }}>🔥 Hot</span>}
                  </div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#10132A", marginBottom: 4, lineHeight: 1.4 }}>{thread.title}</h3>
                  <span style={{ fontSize: "0.78rem", color: "#9096AC" }}>by {thread.author}</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 20, fontSize: "0.82rem", color: "#9096AC", flexShrink: 0 }}>
                <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}><strong style={{ color: "#10132A", fontWeight: 700 }}>{thread.replies}</strong>replies</span>
                <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}><strong style={{ color: "#10132A", fontWeight: 700 }}>{thread.views}</strong>views</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
