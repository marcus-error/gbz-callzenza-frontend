"use client";
export default function Documentation() {
  const sections = [
    {
      id: 1,
      icon: "🚀",
      title: "Getting Started",
      color: "#7C5CFF",
      items: [
        { name: "Quick Start Guide", desc: "Up and running in under 10 minutes" },
        { name: "System Requirements", desc: "Hardware and software prerequisites" },
        { name: "Installation", desc: "Step-by-step setup instructions" },
        { name: "Authentication Setup", desc: "SSO, API keys, and OAuth configuration" },
      ],
    },
    {
      id: 2,
      icon: "🧠",
      title: "Core Concepts",
      color: "#3B6EF6",
      items: [
        { name: "AI Call Routing", desc: "How intelligent routing decisions work" },
        { name: "Sentiment Analysis", desc: "Real-time emotion detection in calls" },
        { name: "Agent Assist", desc: "Live suggestions and knowledge surfacing" },
        { name: "Conversation Flows", desc: "Building and deploying call scripts" },
      ],
    },
    {
      id: 3,
      icon: "🔌",
      title: "Integrations",
      color: "#1FAE7A",
      items: [
        { name: "Salesforce CRM", desc: "Native bi-directional sync" },
        { name: "Zendesk", desc: "Ticket creation and case management" },
        { name: "HubSpot", desc: "Contact and pipeline synchronization" },
        { name: "REST API Reference", desc: "Full API docs with code examples" },
      ],
    },
    {
      id: 4,
      icon: "⚙️",
      title: "Advanced Topics",
      color: "#F5A623",
      items: [
        { name: "Custom AI Models", desc: "Fine-tune models on your call data" },
        { name: "Multi-language Setup", desc: "28 languages, dialect support" },
        { name: "Analytics & Reporting", desc: "Custom dashboards and exports" },
        { name: "Compliance & Security", desc: "SOC 2, GDPR, HIPAA guidance" },
      ],
    },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(160deg, #F6F8FD 0%, #EEF0FA 100%)", fontFamily: "Inter, sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #0A0E2E 0%, #10132A 60%, #161E5E 100%)", padding: "80px 32px 72px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 50%, rgba(124,92,255,0.3) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "#C9BEFF", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 30, marginBottom: 20 }}>Docs</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 14 }}>Documentation</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: 500, margin: "0 auto" }}>Everything you need to integrate, configure, and scale GBZ in your organisation.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "60px 24px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 28 }}>
          {sections.map((section) => (
            <div key={section.id} style={{ background: "#fff", border: "1px solid #E6E9F5", borderRadius: 24, padding: "32px", boxShadow: "0 4px 18px rgba(16,19,42,0.05)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: section.color }} />
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, background: `${section.color}18`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>{section.icon}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#10132A" }}>{section.title}</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {section.items.map((item) => (
                  <a key={item.name} href="#" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", borderRadius: 10, textDecoration: "none", transition: "background 0.15s ease", background: "transparent" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = `${section.color}08`)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "#10132A" }}>{item.name}</div>
                      <div style={{ fontSize: "0.78rem", color: "#9096AC", marginTop: 2 }}>{item.desc}</div>
                    </div>
                    <span style={{ color: section.color, fontSize: "1rem", marginLeft: 8 }}>&#8594;</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, background: "linear-gradient(135deg,#0A0E2E,#161E5E)", borderRadius: 20, padding: "32px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", marginBottom: 4 }}>Can't find what you're looking for?</p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>Our support team responds in under 2 hours.</p>
          </div>
          <a href="/contact" style={{ background: "linear-gradient(135deg,#7C5CFF,#3B6EF6)", color: "#fff", fontWeight: 700, fontSize: "0.9rem", padding: "12px 24px", borderRadius: 12, textDecoration: "none", whiteSpace: "nowrap" }}>Contact Support</a>
        </div>
      </div>
    </main>
  );
}
