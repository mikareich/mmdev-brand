import { getMdxContent } from "~/utils/cms";
import ContactForm from "./components/ContactForm";
import ProductTabs from "./components/ProductTabs";
import Profiles from "./components/Profiles";
import ProjectList from "./components/ProjectList";
import Contact from "./content/contact.mdx";
import OurProducts from "./content/our-products.mdx";
import Showcase from "./content/showcase.mdx";
import WhoWeAre from "./content/who-we-are.mdx";

export default async function Home() {
  return (
    <article className="container">
      {await getMdxContent(WhoWeAre, { Profiles })}

      {await getMdxContent(OurProducts, { ProductTabs })}

      {await getMdxContent(Showcase, { ProjectList })}

      {await getMdxContent(Contact, { ContactForm })}
    </article>
  );
}
