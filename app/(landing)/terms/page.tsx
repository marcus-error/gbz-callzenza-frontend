export default function Terms() {
  const sections = [
    { id: 1, title: "Acceptance of Terms", body: "By accessing or using the GBZ platform, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not access or use our services." },
    { id: 2, title: "Use of Services", body: "You may use our services only as permitted by law and these terms. You agree not to misuse our services or help anyone else do so — including reverse engineering the platform, scraping data, or attempting to extract source code." },
    { id: 3, title: "Account Responsibilities", body: "You are responsible for maintaining the confidentiality of your account credentials. You must notify us immediately if you believe your account has been compromised. GBZ is not liable for any loss resulting from unauthorized use of your account." },
    { id: 4, title: "Billing and Payments", body: "Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by applicable law. We reserve the right to change our pricing with 30 days written notice to active subscribers." },
    { id: 5, title: "Intellectual Property", body: "GBZ and its licensors own all rights, title, and interest in the platform and its content. You are granted a limited, non-exclusive, non-transferable licence to use the service for its intended purpose during your subscription period." },
    { id: 6, title: "Limitation of Liability", body: "To the maximum extent permitted by law, GBZ shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services, even if we have been advised of the possibility of such damages." },
    { id: 7, title: "Contact Us", body: "For questions about these Terms, please contact our legal team at legal@GBZ.com or write to us at 123 Innovation Ave, San Francisco, CA 94105. We aim to respond to all enquiries within 5 business days." },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(160deg, #F6F8FD 0%, #EEF0FA 100%)", fontFamily: "Inter, sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #0A0E2E 0%, #161E5E 40%, #3B6EF6 100%)", padding: "80px 32px 72px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,110,246,0.4), transparent 70%)", filter: "blur(60px)", top: -200, left: -100, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "#8FB3FF", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 30, marginBottom: 20 }}>Legal</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 14 }}>Terms & Conditions</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem" }}>Last updated: October 13, 2026</p>
        </div>
      </div>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "60px 24px 100px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {sections.map((s) => (
            <div key={s.id} style={{ background: "#fff", border: "1px solid #E6E9F5", borderRadius: 20, padding: "28px 32px", boxShadow: "0 4px 18px rgba(16,19,42,0.05)" }}>
              <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#10132A", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 28, height: 28, background: "linear-gradient(135deg,#3B6EF6,#7C5CFF)", borderRadius: 8, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.7rem", fontWeight: 800, flexShrink: 0 }}>{s.id}</span>
                {s.title}
              </h2>
              <p style={{ color: "#5B6178", lineHeight: 1.75, fontSize: "0.95rem" }}>{s.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, background: "linear-gradient(135deg,#3B6EF6,#7C5CFF)", borderRadius: 20, padding: "32px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", marginBottom: 4 }}>Questions about our terms?</p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem" }}>Our legal team is happy to help.</p>
          </div>
          <a href="mailto:legal@GBZ.com" style={{ background: "#fff", color: "#3B6EF6", fontWeight: 700, fontSize: "0.9rem", padding: "12px 24px", borderRadius: 12, textDecoration: "none", whiteSpace: "nowrap" }}>Contact Legal Team</a>
        </div>
      </div>
    </main>
  );
}
