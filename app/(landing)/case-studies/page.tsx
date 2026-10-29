export default function CaseStudies() {
  const stats = [
    { value: "52%", label: "Avg AHT Reduction" },
    { value: "89%", label: "Avg CSAT Score" },
    { value: "3x", label: "Throughput Increase" },
    { value: "38%", label: "Cost Savings" },
  ];
  const studies = [
    { id: 1, company: "FinanceCore Inc.", industry: "Banking & Finance", emoji: "🏦", result: "52% reduction in average handle time", metric1: { value: "8.4m", label: "Before AHT" }, metric2: { value: "4.0m", label: "After AHT" }, metric3: { value: "89%", label: "CSAT Score" }, description: "FinanceCore deployed GBZ across 200 agents. Within 3 months, average handle time dropped from 8.4 to 4.0 minutes, and CSAT scores rose from 67% to 89% — all without additional headcount." },
    { id: 2, company: "MediCall Health", industry: "Healthcare", emoji: "🏥", result: "3× increase in appointment throughput", metric1: { value: "3x", label: "Throughput" }, metric2: { value: "95%", label: "Accuracy" }, metric3: { value: "40%", label: "Cost Saved" }, description: "MediCall used GBZ AI assistants to handle routine appointment calls autonomously, freeing human agents to focus on complex patient needs and escalations. Scheduling throughput tripled in 60 days." },
    { id: 3, company: "RetailMax Group", industry: "Retail & E-commerce", emoji: "🛍️", result: "38% reduction in support operating costs", metric1: { value: "91%", label: "FCR Rate" }, metric2: { value: "38%", label: "Cost Cut" }, metric3: { value: "4.8★", label: "Satisfaction" }, description: "RetailMax integrated GBZ with their CRM and saw a dramatic drop in repeat calls. First-call resolution improved to 91%, and customers now resolve issues in under 2 minutes on average." },
    { id: 4, company: "TechServe Global", industry: "Technology & SaaS", emoji: "💻", result: "99.8% uptime with zero unplanned downtime", metric1: { value: "99.8%", label: "Uptime" }, metric2: { value: "70%", label: "Tier-1 Auto" }, metric3: { value: "2× ", label: "NPS Growth" }, description: "TechServe automated tier-1 support with GBZ, handling 70% of inbound requests autonomously. Their engineering team now focuses on innovation rather than repetitive queries." },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(160deg, #F6F8FD 0%, #EEF0FA 100%)", fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #161E5E 0%, #2C3FA8 50%, #7C5CFF 100%)", padding: "80px 32px 72px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(59,110,246,0.45),transparent 70%)", filter: "blur(80px)", bottom: -300, left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "#8FB3FF", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 30, marginBottom: 20 }}>Case Studies</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 14 }}>Real Results, Real Teams</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: 520, margin: "0 auto" }}>See how companies across industries transformed their customer operations with GBZ.</p>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ maxWidth: 960, margin: "-32px auto 0", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ background: "#fff", border: "1px solid #E6E9F5", borderRadius: 16, padding: "20px 24px", textAlign: "center", boxShadow: "0 8px 24px rgba(16,19,42,0.07)" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, background: "linear-gradient(135deg,#7C5CFF,#3B6EF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
              <div style={{ fontSize: "0.78rem", color: "#9096AC", fontWeight: 600, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Studies */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px 100px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {studies.map((study) => (
            <div key={study.id} style={{ background: "#fff", border: "1px solid #E6E9F5", borderRadius: 24, padding: "36px 40px", boxShadow: "0 4px 18px rgba(16,19,42,0.05)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20, marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 52, height: 52, background: "linear-gradient(135deg,#F6F8FD,#E6E9F5)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", border: "1px solid #E6E9F5" }}>{study.emoji}</div>
                  <div>
                    <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#10132A", marginBottom: 4 }}>{study.company}</h2>
                    <span style={{ fontSize: "0.8rem", color: "#7C5CFF", fontWeight: 600 }}>{study.industry}</span>
                  </div>
                </div>
                <div style={{ background: "linear-gradient(135deg,rgba(124,92,255,0.1),rgba(59,110,246,0.1))", border: "1px solid rgba(124,92,255,0.2)", color: "#7C5CFF", padding: "8px 18px", borderRadius: 99, fontSize: "0.85rem", fontWeight: 700 }}>{study.result}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 24 }}>
                {[study.metric1, study.metric2, study.metric3].map((m) => (
                  <div key={m.label} style={{ background: "#F6F8FD", border: "1px solid #E6E9F5", borderRadius: 12, padding: "16px 20px" }}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#10132A" }}>{m.value}</div>
                    <div style={{ fontSize: "0.75rem", color: "#9096AC", marginTop: 2 }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: "#5B6178", lineHeight: 1.75, fontSize: "0.95rem" }}>{study.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
