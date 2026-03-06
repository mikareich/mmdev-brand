import React from "react";

export const PROFILES = [
  {
    name: "Mika Reich",
    description: (
      <React.Fragment>
        <span className="font-bold">Mika Reich</span> is an experienced software
        engineer specializing in abstract languages for the web. He handles the
        complex engineering under the hood to ensure your site is fast and
        flawless.
      </React.Fragment>
    ),
    linkedin: "https://linkedin.com/in/mikareich",
    github: "https://github.com/mikareich",
  },
  {
    name: "Marco Zillgen",
    description: (
      <React.Fragment>
        <span className="font-bold">Marco Zillgen</span> is an experienced
        software engineer specializing in abstract languages for the web. He
        handles the complex engineering under the hood to ensure your site is
        fast and flawless.
      </React.Fragment>
    ),
    linkedin: "https://linkedin.com/in/marcozillgen",
    github: "https://github.com/marcozillgen",
  },
] as const;
