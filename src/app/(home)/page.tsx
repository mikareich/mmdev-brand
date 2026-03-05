import React from "react";
import Section from "~/components/Section";

export default function Home() {
  return (
    <article className="grid grid-cols-1 gap-6 sm:gap-16">
      <Section
        level={1}
        title="Who we are"
        contents={[
          <React.Fragment key={0}>
            We are a development studio focused on building clean, fast and
            modern websites. We help small businesses and startups establish
            their online presence, without unnecessary complexity, just results.
          </React.Fragment>,
          <div key={1} className="grid grid-cols-2 gap-4">
            <div className="bg-taupe-400 h-48 border-r border-theme-border-subtle" />
            <div className="bg-taupe-400 h-48 border-l border-theme-border-subtle" />
          </div>,
        ]}
      />

      <Section
        level={1}
        title="Who we are"
        contents={[
          <React.Fragment key={0}>
            We are a development studio focused on building clean, fast and
            modern websites. We help small businesses and startups establish
            their online presence, without unnecessary complexity, just results.
          </React.Fragment>,
          <div key={1} className="grid grid-cols-2 gap-4">
            <div className="bg-taupe-400 h-48 border-r border-theme-border-subtle" />
            <div className="bg-taupe-400 h-48 border-l border-theme-border-subtle" />
          </div>,
        ]}
      />
    </article>
  );
}
