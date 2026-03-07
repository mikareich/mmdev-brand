import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import BorderBox from "~/components/BorderBox";
import Section from "~/components/Section";
import { PROFILES } from "~/content/profiles";

export default function WhoWeAre() {
    return (
        <Section
            level={1}
            title="Who we are"
            className="grid-cols-2"
            contents={[
                <BorderBox
                    className="border-theme-border-subtle col-span-full"
                    asChild
                    key={0}
                >
                    <p className="p-0.5 sm:p-1 bg-theme-background-accent">
                        We are a development studio building clean, fast, and
                        modern websites. We help small businesses and startups
                        establish their online presence with zero unnecessary
                        complexity—just results. Our focus is raw performance,
                        scalable architecture, and straightforward design.
                    </p>
                </BorderBox>,
                ...PROFILES.map(({ name, description, github, linkedin }) => (
                    <BorderBox
                        asChild
                        key={name}
                        className="hover:bg-taupe-100 border-theme-border-subtle p-1 sm:p-2"
                    >
                        <div>
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
                        </div>
                    </BorderBox>
                )),
            ]}
        />
    );
}
