import { getMdxContent } from "~/utils/cms";
import ImprintContent from "./imprint.mdx";

export default async function Imprint() {
  return (
    <article className="container">
      {await getMdxContent(ImprintContent)}
    </article>
  );
}
