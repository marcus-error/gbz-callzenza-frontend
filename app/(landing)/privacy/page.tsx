export default function Privacy() {
  const sections = [
    {
      id: 1,
      title: "1. Information We Collect",
      body: "We collect information you provide directly to us when you create an account, use our services, or contact us for support — including your name, email address, company name, phone number, and payment information. We also automatically collect usage data such as IP addresses, browser type, and pages visited.",
    },
    {
      id: 2,
      title: "2. How We Use Your Information",
      body: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions. We may also use it to send product news and promotional communications where you have opted in.",
    },
    {
      id: 3,
      title: "3. Information Sharing",
      body: "We do not sell your personal information. We may share your information with trusted vendors and service providers who perform services on our behalf — such as payment processing, data analytics, and cloud hosting — under strict data protection agreements.",
    },
    {
      id: 4,
      title: "4. Data Security",
      body: "We take reasonable technical and organisational measures to protect your information. All data is encrypted in transit using TLS 1.3 and at rest using AES-256. Access to personal data is restricted to authorised personnel only.",
    },
    {
      id: 5,
      title: "5. Your Rights",
      body: "Depending on your location, you may have the right to access, correct, delete, or export the personal data we hold about you. To exercise these rights, contact us at privacy@GBZ.com and we will respond within 30 days.",
    },
    {
      id: 6,
      title: "6. Contact Us",
      body: "If you have any questions about this Privacy Policy, please contact our Data Protection Officer at privacy@GBZ.com or write to us at 123 Innovation Ave, San Francisco, CA 94105.",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #F6F8FD 0%, #EEF0FA 100%)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Hero Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #0A0E2E 0%, #161E5E 40%, #7C5CFF 100%)",
          padding: "80px 32px 72px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,92,255,0.4), transparent 70%)",
            filter: "blur(60px)",
            top: -200,
            right: -100,
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#C9BEFF",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: 30,
              marginBottom: 20,
            }}
          >
            Legal
          </span>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 14,
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem" }}>
            Last updated: October 13, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "60px 24px 100px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {sections.map((s) => (
            <div
              key={s.id}
              style={{
                background: "#fff",
                border: "1px solid #E6E9F5",
                borderRadius: 20,
                padding: "28px 32px",
                boxShadow: "0 4px 18px rgba(16,19,42,0.05)",
                transition: "box-shadow 0.2s ease",
              }}
            >
              <h2
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#10132A",
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    width: 28,
                    height: 28,
                    background: "linear-gradient(135deg,#7C5CFF,#3B6EF6)",
                    borderRadius: 8,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  {s.id}
                </span>
                {s.title.replace(/^\d+\.\s*/, "")}
              </h2>
              <p style={{ color: "#5B6178", lineHeight: 1.75, fontSize: "0.95rem" }}>{s.body}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 48,
            background: "linear-gradient(135deg,#7C5CFF,#3B6EF6)",
            borderRadius: 20,
            padding: "32px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", marginBottom: 4 }}>
              Have questions about your data?
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem" }}>
              Our privacy team responds within 30 days.
            </p>
          </div>
          <a
            href="mailto:privacy@GBZ.com"
            style={{
              background: "#fff",
              color: "#7C5CFF",
              fontWeight: 700,
              fontSize: "0.9rem",
              padding: "12px 24px",
              borderRadius: 12,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Contact Privacy Team
          </a>
        </div>
      </div>
    </main>
  );
}
