"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollLink from "../scrollTarget/scrollTarget";
import "./navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (currentY > lastScrollY.current && currentY > 50) {
        // Scrolling down
        setShowNavbar(false);
      } else if (currentY < lastScrollY.current) {
        // Scrolling up
        setShowNavbar(true);
      }
      lastScrollY.current = currentY;

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`navbarWrapper ${showNavbar ? "navbarShow" : "navbarHide"}`}>
        <div className="navbarBackground">
          <div className="navbarMainContainer">
            <Link href="/">
              <div className="navbarImageContainer">
                <Image
                  src="/home/logoBanner.svg"
                  alt="Logo"
                  fill
                  className="navbarImage"
                />
              </div>           
            </Link>

            <div
              className={`mobileHamburgerMenu ${isMenuOpen ? "open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="hamburgerLine top"></div>
              <div className="hamburgerLine bottom"></div>
            </div>

            <div className="desktopNavbarLinks">
              <Link href="/">
                <div className="desktopLink">Home</div>
              </Link>
              <ScrollLink scrollTarget="about" offset={-100}>
                <div className="desktopLink">About</div>  
              </ScrollLink>
              <ScrollLink scrollTarget="weddings" offset={-100}>
               <div className="desktopLink">Weddings & Events</div> 
              </ScrollLink>
              <Link href="/disclaimer">
                <div className="desktopLinkLast">Contact</div>
              </Link>
              
            </div>
          </div>

          {isMenuOpen && (
            <div className="mobileNavbarMenu">
              <div className="mobileNavbarBackDrop">
                <Image
                  src="/home/backDrop.svg"
                  fill
                  alt="BackDrop"
                  className="mobileNavbarBackDropImage"
                />
              </div>
              <div className="mobileLinks">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <div className="navbarMobileLink">Home</div>
                </Link>
                <ScrollLink scrollTarget="about" offset={-100} onClick={() => setIsMenuOpen(false)}>
                  <div className="navbarMobileLink">About</div>
                </ScrollLink>
                <ScrollLink scrollTarget="collections" onClick={() => setIsMenuOpen(false)}>
                  <div className="navbarMobileLink">Shop</div>
                </ScrollLink>
                <ScrollLink scrollTarget="weddings" offset={-100} onClick={() => setIsMenuOpen(false)}>
                  <div className="navbarMobileLink">Weddings & Events</div>
                </ScrollLink>
                <Link href="/disclaimer" onClick={() => setIsMenuOpen(false)}>
                  <div className="navbarMobileLink">Contact</div>
                </Link>

              </div>
              <div className="mobileContactDetails">
                <div className="mobileEmail">inquiry@vandv.com</div>
                <div className="mobilePhone">+1 (973) 837 - 8936</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
