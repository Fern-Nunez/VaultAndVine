"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollLink from "../scrollTarget/scrollTarget";
import "./footer.css";

export default function Footer() {
  const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);
  const [isLegalOpen, setLegalOpen] = useState(false);

  return (
    <div className="footerSection">
      {/* Banner */}
      <div className="footerSectionImageContainer">
        <Image
          src="/home/logoBanner.svg"
          fill
          alt="logo"
          className="footerSectionImage"
        />
      </div>

      {/* Desktop Grid */}
      <div className="desktopGrid">
        {/* Location */}
        <div className="footerLocationSection">
          <div className="footerTopLevel"><span>Location</span></div>
          <div className="footerBottomLevel"><span>1234 Hawthorne Ave, 98263</span></div>
          <div className="footerBottomLevel"><span>San Francisco, CA</span></div>
          <div className="footerBottomLevel"><span>+1 (973) 837 - 8936</span></div>
        </div>

        {/* Desktop Quick Links */}
        <div className="desktopQuickLinkSection">
          <div className="footerTopLevel"><span>QuickLinks</span></div>
          <Link href="/">
            <div className="footerBottomLevelNavDesktop"><span>Home</span></div>
          </Link>
          <ScrollLink scrollTarget="about" offset={-100}>
            <div className="footerBottomLevelNavDesktop"><span>About</span></div>
          </ScrollLink>
          <ScrollLink scrollTarget="collections" offset={-100}>
            <div className="footerBottomLevelNavDesktop"><span>Shop</span></div>
          </ScrollLink>
          <ScrollLink scrollTarget="weddings" offset={-100}>
            <div className="footerBottomLevelNavDesktop"><span>Weddings & Events</span></div>
          </ScrollLink>
          <Link href="/disclaimer">
            <div className="footerBottomLevelNavDesktop"><span>Contact</span></div>
          </Link>
        </div>

        {/* Desktop Legal */}
        <div className="desktopLegalSection">
          <div className="footerTopLevel"><span>Legal</span></div>
          <Link href="/disclaimer">
            <div className="footerBottomLevelNavDeskTop"><span>Privacy Policy</span></div>
          </Link>
          <Link href="/disclaimer">
            <div className="footerBottomLevelNavDeskTop"><span>Terms of Service</span></div>
          </Link>
          <Link href="/disclaimer">
            <div className="footerBottomLevelNavDeskTop"><span>Cookie Policy</span></div>
          </Link>
        </div>
      </div>

      {/* Mobile Quick Links */}
      <div className="footerQuickLinkSection">
        <div
          className="footerNavTitle"
          onClick={() => {
            setQuickLinksOpen(!isQuickLinksOpen);
            setLegalOpen(false);
          }}
        >
          <span>Quick Links</span>
          <svg
            className={`footerChevron ${isQuickLinksOpen ? "rotate" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        <hr className="footerSeperator" />
        <div className={`footerCollapsible ${isQuickLinksOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setTimeout(() => setQuickLinksOpen(false), 100)}>
            <div className="footerBottomLevelNav"><span>Home</span></div>
          </Link>
          <ScrollLink
            scrollTarget="about"
            offset={-100}
            delayScroll
            onClick={() => setTimeout(() => setQuickLinksOpen(false), 100)}
          >
            <div className="footerBottomLevelNav"><span>About</span></div>
          </ScrollLink>
          <ScrollLink
            scrollTarget="collections"
            offset={-115}
            delayScroll
            onClick={() => setTimeout(() => setQuickLinksOpen(false), 100)}
          >
            <div className="footerBottomLevelNav"><span>Shop</span></div>
          </ScrollLink>
          <ScrollLink
            scrollTarget="weddings"
            offset={-100}
            delayScroll
            onClick={() => setTimeout(() => setQuickLinksOpen(false), 100)}
          >
            <div className="footerBottomLevelNav"><span>Weddings & Events</span></div>
          </ScrollLink>
          <Link href="/disclaimer" onClick={() => setTimeout(() => setQuickLinksOpen(false), 100)}>
            <div className="footerBottomLevelNav"><span>Contact</span></div>
          </Link>
        </div>
      </div>

      {/* Mobile Legal */}
      <div className="footerLegalSection">
        <div
          className="footerNavTitle"
          onClick={() => {
            setLegalOpen(!isLegalOpen);
            setQuickLinksOpen(false);
          }}
        >
          <span>Legal</span>
          <svg
            className={`footerChevron ${isLegalOpen ? "rotate" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        <hr className="footerSeperator" />
        <div className={`footerCollapsible ${isLegalOpen ? "open" : ""}`}>
          <Link href="/disclaimer" onClick={() => setTimeout(() => setLegalOpen(false), 100)}>
            <div className="footerBottomLevelNav"><span>Privacy Policy</span></div>
          </Link>
          <Link href="/disclaimer" onClick={() => setTimeout(() => setLegalOpen(false), 100)}>
            <div className="footerBottomLevelNav"><span>Terms of Service</span></div>
          </Link>
          <Link href="/disclaimer" onClick={() => setTimeout(() => setLegalOpen(false), 100)}>
            <div className="footerBottomLevelNav"><span>Cookie Policy</span></div>
          </Link>
        </div>
      </div>

      {/* Footer Rights */}
      <div className="rights">
        <span>Designed By Monoscale - All Rights</span>
      </div>
    </div>
  );
}
