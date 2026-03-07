"use client";
import { useEffect, useState } from "react";
import LinkButton from "./LinkButton";
import Button from "./Button";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

const HEADER_SHRINK_SCROLL_DISTANCE = 100;

const navLinks = [
  { label: "01 WHO", href: "/#who-we-are" },
  { label: "02 WHAT", href: "/#our-products" },
  { label: "03 HOW", href: "" },
];

interface NavProps {
  onNavClick?: () => void;
}

function DesktopHeaderNav() {
  return (
    <div className="hidden lg:flex gap-4 w-full max-w-200 px-4 items-center">
      {navLinks.map((link) => (
        <LinkButton
          key={link.label}
          href={link.href}
          className="text-xl w-full text-center"
          variant="Ghost"
        >
          {link.label}
        </LinkButton>
      ))}
      <LinkButton
        href=""
        className="text-xl w-full text-center"
        variant="Filled"
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
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-taupe-100 border-b border-taupe-300 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="px-4 py-4 space-y-3 border-t border-taupe-300">
        {navLinks.map((link) => (
          <LinkButton
            key={link.label}
            href={link.href}
            className="block text-center py-2"
            variant="Outline"
            onClick={onNavClick}
          >
            {link.label}
          </LinkButton>
        ))}
        <LinkButton
          href=""
          className="block text-center py-2 w-full"
          variant="Filled"
          onClick={onNavClick}
        >
          Start now
        </LinkButton>
      </div>
    </div>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(
        window.scrollY / HEADER_SHRINK_SCROLL_DISTANCE,
        1,
      );
      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(progress),
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 px-auto bg-taupe-100 w-full border-b border-taupe-300">
      <div className="px-4 w-full h-full m-auto container">
        <div className="header flex justify-between items-center w-full border-taupe-300 border-x h-full">
          <div className="min-w-fit px-4">
            <Button
              onClick={scrollTop}
              variant="Ghost"
              className="header-title font-extrabold text-taupe-600"
            >
              MMDEV
            </Button>
          </div>

          <DesktopHeaderNav />

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 mr-4 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <Cross1Icon className="w-6 h-6 text-taupe-600" />
            ) : (
              <HamburgerMenuIcon className="w-6 h-6 text-taupe-600" />
            )}
          </button>
        </div>

        <MobileHeaderNav
          isOpen={isMobileMenuOpen}
          onNavClick={closeMobileMenu}
        />
      </div>
    </header>
  );
}
