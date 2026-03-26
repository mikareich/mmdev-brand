import Image from "next/image";
import React from "react";

export const PROFILES = [
  {
    name: "Mika Reich",
    description: (
      <React.Fragment>
        <Image
          src="/undraw_in-the-zone_07y7.svg"
          width={64}
          height={64}
          alt=""
          className="aspect-square size-32 float-right ml-2 mb-2"
        />
        I’m Mika, a 21-year-old Computer Science student in Saarbrücken. I've
        been coding websites for a decade. I focus on the frontend—building
        clean, modern interfaces that load instantly and give your customers a
        flawless, frustration-free experience.
      </React.Fragment>
    ),
    linkedin: "https://linkedin.com/in/mikareich",
    github: "https://github.com/mikareich",
    email: "mikareich0@gmail.com",
  },
  {
    name: "Marco Zillgen",
    description: (
      <React.Fragment>
        <Image
          src="/undraw_product-demo_9d4i.svg"
          width={64}
          height={64}
          alt=""
          className="aspect-square size-32 float-right ml-2 mb-2"
        />
        I’m Marco, also a 21-year-old CS student in Saarbrücken. My background
        is in low-level programming and IoT. I bring a strict
        systems-engineering mindset to the table, ensuring the architecture
        behind your site is secure, highly scalable, and exceptionally fast from
        the ground up.
      </React.Fragment>
    ),
    linkedin: "https://linkedin.com/in/marcozillgen",
    github: "https://github.com/marcozillgen",
    email: "marcosimonzillgen@gmail.com",
  },
] as const;
