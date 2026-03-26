import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Section from "~/components/Section";
import { PROFILES } from "~/utils/profiles";

export default function Profiles() {
  return PROFILES.map(({ name, description, github, linkedin }) => (
    <Section.Content key={name} className="hover:bg-taupe-100">
      <p className="line-clamp-4">{description}</p>
      <p className="flex gap-4">
        <Link
          className="flex items-center gap-1 hover:underline"
          href={linkedin}
          target="_blank"
        >
          <LinkedInLogoIcon />
          LinkedIn
        </Link>
        <Link
          className="flex items-center gap-1 hover:underline"
          href={github}
          target="_blank"
        >
          <GitHubLogoIcon />
          GitHub
        </Link>
      </p>
    </Section.Content>
  ));
}
