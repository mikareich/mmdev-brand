import { getMdxContent } from "~/utils/cms";
import PrivacyPolicyContent from "./privacy-policy.mdx";

export default async function PrivacyPolicy() {
  return (
    <article className="container">
      {await getMdxContent(PrivacyPolicyContent)}
    </article>
  );
}
