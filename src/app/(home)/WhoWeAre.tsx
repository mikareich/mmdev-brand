import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import Section from "~/components/Section";

export default function WhoWeAre() {
  return (
    <Section
      level={1}
      title="Who we are"
      contents={[
        <React.Fragment key={0}>
          We are a development studio building clean, fast, and modern websites.
          We help small businesses and startups establish their online presence
          with zero unnecessary complexity—just results. Our focus is raw
          performance, scalable architecture, and straightforward design.
        </React.Fragment>,

        <div key={1} className="grid grid-cols-2 gap-4">
          <div className="hover:bg-taupe-100 border-r border-theme-border-subtle">
            <p>
              <span className="font-bold">Marco Zillgen</span> is an experienced
              software engineer specializing in abstract languages for the web.
              He handles the complex engineering under the hood to ensure your
              site is fast and flawless.
            </p>

            <p className="flex gap-4">
              <Link
                className="flex items-center gap-1 hover:underline"
                href="https://www.linkedin.com/in/marcozillgen/"
                target="_blank"
              >
                <LinkedInLogoIcon />
                LinkedIn
              </Link>
              <Link
                className="flex items-center gap-1 hover:underline"
                href="https://github.com/MarcoZillgen"
                target="_blank"
              >
                <GitHubLogoIcon />
                GitHub
              </Link>
            </p>
          </div>

          <div className="hover:bg-taupe-100 border-l border-theme-border-subtle">
            <p>
              <span className="font-bold">Mika Reich</span> is an experienced
              software engineer specializing in abstract languages for the web.
              He handles the complex engineering under the hood to ensure your
              site is fast and flawless.
            </p>

            <p className="flex gap-4">
              <Link
                className="flex items-center gap-1 hover:underline"
                href="https://www.linkedin.com/in/mikareich/"
                target="_blank"
              >
                <LinkedInLogoIcon />
                LinkedIn
              </Link>
              <Link
                className="flex items-center gap-1 hover:underline"
                href="https://github.com/mikareich"
                target="_blank"
              >
                <GitHubLogoIcon />
                GitHub
              </Link>
            </p>
          </div>
        </div>,
      ]}
    />
  );
}
