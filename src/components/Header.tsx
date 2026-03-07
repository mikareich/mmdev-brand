"use client";
import { useEffect } from "react";
import LinkButton from "./LinkButton";
import Button from "./Button";

const HEADER_SHRINK_SCROLL_DISTANCE = 100;

export default function Header() {
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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 px-34 bg-taupe-100 w-full border-b border-taupe-300">
      <div className="header px-4 flex justify-between items-center w-full border-taupe-300 border-x h-full">
        <div className="min-w-fit w-1/2">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            variant="Ghost"
            className="header-title font-extrabold text-taupe-600"
          >
            MMDEV
          </Button>
        </div>
        <div className="flex gap-4 w-full max-w-200">
          <LinkButton
            href="/#who-we-are"
            className="text-xl w-full"
            variant="Ghost"
          >
            01 WHO
          </LinkButton>
          <LinkButton
            href="/#our-products"
            className="text-xl w-full"
            variant="Ghost"
          >
            02 WHAT
          </LinkButton>
          <LinkButton href="" className="text-xl w-full" variant="Ghost">
            03 HOW
          </LinkButton>
          <LinkButton href="" className="text-xl w-full" variant="Filled">
            Start now
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
