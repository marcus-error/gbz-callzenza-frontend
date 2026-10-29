export default function Blog() {
  const featured = {
    id: 1,
    title: "How AI is Transforming Enterprise Call Centers in 2026",
    date: "October 10, 2026",
    category: "AI Insights",
    readTime: "6 min read",
    excerpt: "Discover how leading enterprises are leveraging AI automation to reduce average handle time by 40%, improve CSAT scores from 67% to 89%, and free agents to focus on what humans do best — empathy.",
  };
  const posts = [
    { id: 2, title: "GBZ 3.0: New Features Shipped This Quarter", date: "October 5, 2026", category: "Product Updates", readTime: "4 min read", excerpt: "Real-time sentiment analysis, multi-language support for 28 languages, and a completely revamped analytics dashboard." },
    { id: 3, title: "5 KPIs Every Customer Support Team Should Own", date: "September 28, 2026", category: "Best Practices", readTime: "5 min read", excerpt: "From First Call Resolution to Average Handle Time — the metrics that separate good support from great support." },
    { id: 4, title: "The Future of Voice AI in B2B Sales", date: "September 20, 2026", category: "AI Insights", readTime: "7 min read", excerpt: "Voice AI is no longer just for support. How B2B teams are qualifying leads 3x faster with conversational AI." },
    { id: 5, title: "Building a Culture of Continuous Improvement in Support", date: "September 12, 2026", category: "Best Practices", readTime: "4 min read", excerpt: "The frameworks used by top-performing support orgs to systematically improve quality over time." },
    { id: 6, title: "Announcing GBZ Enterprise: SOC 2 Type II Certified", date: "September 1, 2026", category: "Announcements", readTime: "2 min read", excerpt: "We are proud to announce our SOC 2 Type II certification, reinforcing our commitment to enterprise-grade security." },
  ];

  const tagColors: Record<string, string> = {
    "AI Insights": "#7C5CFF",
    "Product Updates": "#1FAE7A",
    "Best Practices": "#3B6EF6",
    "Announcements": "#F5A623",
  };

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(160deg, #F6F8FD 0%, #EEF0FA 100%)", fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0A0E2E 0%, #161E5E 50%, #7C5CFF 100%)", padding: "80px 32px 72px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,92,255,0.4),transparent 70%)", filter: "blur(60px)", top: -200, right: -100, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "#C9BEFF", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 30, marginBottom: 20 }}>Blog</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 14 }}>Insights & Updates</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: 500, margin: "0 auto" }}>Product news, AI insights, and best practices — once a month, no spam.</p>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "60px 24px 100px" }}>
        {/* Featured */}
        <div style={{ background: "#fff", border: "1px solid #E6E9F5", borderRadius: 24, padding: "40px", boxShadow: "0 20px 50px rgba(16,19,42,0.08)", marginBottom: 40, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg,#7C5CFF,#3B6EF6)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(124,92,255,0.1)", color: "#7C5CFF", fontSize: "0.75rem", fontWeight: 700, padding: "4px 12px", borderRadius: 30, letterSpacing: "0.06em", textTransform: "uppercase" }}>Featured</span>
            <span style={{ background: "rgba(124,92,255,0.08)", color: "#7C5CFF", fontSize: "0.75rem", fontWeight: 700, padding: "4px 12px", borderRadius: 30 }}>{featured.category}</span>
            <span style={{ color: "#9096AC", fontSize: "0.8rem" }}>{featured.date} · {featured.readTime}</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.3rem,2.5vw,1.7rem)", fontWeight: 800, color: "#10132A", marginBottom: 14, lineHeight: 1.25, letterSpacing: "-0.02em" }}>{featured.title}</h2>
          <p style={{ color: "#5B6178", lineHeight: 1.75, fontSize: "0.97rem", maxWidth: 680 }}>{featured.excerpt}</p>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 20, background: "linear-gradient(135deg,#7C5CFF,#3B6EF6)", color: "#fff", fontWeight: 700, fontSize: "0.9rem", padding: "10px 22px", borderRadius: 10, textDecoration: "none" }}>Read Article &#8594;</a>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
          {posts.map((post) => (
            <article key={post.id} style={{ background: "#fff", border: "1px solid #E6E9F5", borderRadius: 20, padding: "28px", boxShadow: "0 4px 18px rgba(16,19,42,0.05)", display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ background: `${tagColors[post.category] || "#7C5CFF"}18`, color: tagColors[post.category] || "#7C5CFF", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: 30, textTransform: "uppercase", letterSpacing: "0.06em" }}>{post.category}</span>
                <span style={{ color: "#9096AC", fontSize: "0.75rem" }}>{post.readTime}</span>
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#10132A", lineHeight: 1.4 }}>{post.title}</h3>
              <p style={{ color: "#5B6178", fontSize: "0.88rem", lineHeight: 1.65, flexGrow: 1 }}>{post.excerpt}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
                <span style={{ color: "#9096AC", fontSize: "0.78rem" }}>{post.date}</span>
                <a href="#" style={{ color: "#7C5CFF", fontWeight: 700, fontSize: "0.82rem", textDecoration: "none" }}>Read &#8594;</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
