"use client";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import Button from "./Button";
import LinkButton from "./LinkButton";

const HEADER_SHRINK_SCROLL_DISTANCE = 100;

const navLinks = [
  { label: "01 WHO", href: "/#who-we-are" },
  { label: "02 WHAT", href: "/#our-products" },
  { label: "03 HOW", href: "" },
];

function DesktopHeaderNav() {
  return (
    <div className="hidden lg:flex gap-4 w-full max-w-200 px-4 items-center">
      {navLinks.map((link) => (
        <LinkButton
          key={link.label}
          href={link.href}
          className="text-xl w-full text-center"
          variant="ghost"
        >
          {link.label}
        </LinkButton>
      ))}
      <LinkButton
        href=""
        className="text-xl w-full text-center"
        variant="filled"
      >
        START NOW
      </LinkButton>
    </div>
  );
}

function MobileHeaderNav({
  isOpen,
  onNavClick,
}: {
  isOpen: boolean;
  onNavClick: () => void;
}) {
  return (
    <div
      aria-hidden={!isOpen}
      className={`lg:hidden absolute top-full left-0 right-0 bg-taupe-100 border-y border-taupe-300 transition-all duration-200 ease-in-out ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="container px-4 w-full mx-auto">
        <div className="border-x border-taupe-300 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <LinkButton
              key={link.label}
              href={link.href}
              className="block text-center py-2"
              variant="outlined"
              onClick={onNavClick}
            >
              {link.label}
            </LinkButton>
          ))}
          <LinkButton
            href=""
            className="block text-center py-2 w-full"
            variant="filled"
            onClick={onNavClick}
          >
            Start now
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    history.scrollRestoration = "manual";

    // Restore saved position
    const saved = sessionStorage.getItem("scrollY");
    if (saved) {
      window.scrollTo(0, parseInt(saved));
      sessionStorage.removeItem("scrollY");
    }

    const onScroll = () => {
      const progress = Math.min(
        window.scrollY / HEADER_SHRINK_SCROLL_DISTANCE,
        1,
      );
      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(progress),
      );
      sessionStorage.setItem("scrollY", String(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 bg-taupe-100 w-full border-b border-taupe-300">
      <div className="px-4 w-full h-full m-auto container">
        <div className="header flex justify-between items-center w-full border-taupe-300 border-x h-full">
          <div className="min-w-fit px-4">
            <Button
              onClick={scrollTop}
              variant="ghost"
              className="header-title font-extrabold text-taupe-600"
            >
              MMDEV
            </Button>
          </div>

          <DesktopHeaderNav />

          <Button
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 mr-4 rounded-lg transition-colors"
            variant={"ghost"}
          >
            {isMobileMenuOpen ? (
              <Cross1Icon className="w-6 h-6 text-taupe-600" />
            ) : (
              <HamburgerMenuIcon className="w-6 h-6 text-taupe-600" />
            )}
          </Button>
        </div>
      </div>
      <MobileHeaderNav isOpen={isMobileMenuOpen} onNavClick={closeMobileMenu} />
    </header>
  );
}
