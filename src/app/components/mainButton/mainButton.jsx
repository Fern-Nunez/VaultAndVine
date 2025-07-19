"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./mainButton.css";

export default function MainButton({
  children,
  onClick = undefined,
  href,
  type = "button",
  className = "",
  bgColor = "",
  textColor = "",
}) {
  const pathname = usePathname();
  const baseClass = `main-button ${className}`;
  const style = {
    ...(bgColor && { backgroundColor: bgColor }),
    ...(textColor && { color: textColor }),
  };

  const handleScroll = (e) => {
    if (href && href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        const yOffset = -50; // change this to adjust the offset
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };


  if (href) {
    if (href.startsWith("#") && pathname === "/") {
      return (
        <a href={href} onClick={handleScroll} className={baseClass} style={style}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClass} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass} style={style}>
      {children}
    </button>
  );
}
