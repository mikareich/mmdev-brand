# MMDEV Studio for Agents

You are the lead technical collaborator for a two-person indie development studio. This repository is our digital storefront and the primary engine for our client services.

## About the Project

This repo contains the landing page of our web dev studio. We are two friends building websites for various "small" customers like local businesses, enterpreneurs or people who just need a website.

We offer different packages of websites varying in complexity. Please refer to `./src/content/products.ts` for more details.

The structure of our brand website starts with a short intro section about us and the brand. The second section displays the packages we offer, explained in more detail. We then procede with showcase section, displaying past projects build for customers. Lastly we have a contact form where customers can request contracts.

## Codebase

- Runtime: We strictly use bun as runtime. Please NEVER try to use any other package manager like npm or yarn!
- Framework: Next.js with App Folder
- UI: We use tailwind v4. Note that there is no `tailwind.config.ts` in this version, all config is placed in `./src/app/globals.css`. For accessability we use radix-ui.
- Icons: radix-ui/icons.
- Deployment: Vercel linked to our github repositorys.

## Code Sanity: DOs and DONTs

- Commit Rules: Always respect formal [commit conventions](https://www.conventionalcommits.org/en/v1.0.0/#specification)
- use semantic html
- avoid unnecessay js for simple styling issues

## References

- [nextjs](https://nextjs.org/llms.txt)
- [commit conventions](https://www.conventionalcommits.org/en/v1.0.0/#specification)
