import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer id="resources">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link href="/" className="logo" style={{ color: "#fff" }}>
              <span className="logo-mark"><Sparkles size={16} strokeWidth={2.5} /></span>GBZ
            </Link>
            <p style={{ marginTop: 14, maxWidth: 260 }}>
              Enterprise AI automation for teams that can't afford to move slowly.
            </p>
            <div className="social-row">
              <a href="#">in</a>
              <a href="#">𝕏</a>
              <a href="#">f</a>
              <a href="#">▶</a>
            </div>
          </div>
          <div>
            <h5>Product</h5>
            <ul>
              <li><Link href="/solutions">Solutions</Link></li>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><a href="/blog">Updates</a></li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/case-studies">Case Studies</a></li>
              <li><a href="/documentation">Documentation</a></li>
              <li><a href="/community">Community</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>sales@aminoid.in</li>
            </ul>
          </div>
          <div>
            <h5>Newsletter</h5>
            <p style={{ fontSize: "0.85rem" }}>Product news, once a month. No spam.</p>
            <div className="newsletter-input">
              <input type="email" placeholder="you@company.com" suppressHydrationWarning />
              <button suppressHydrationWarning>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <div> <a href="https://aminoid.in" target="_blank" rel="noopener noreferrer" style={{ color: "var(--purple)", fontWeight: 600 }}>Powered by Aminoid</a> · © 2026 GBZ. All rights reserved.</div>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

