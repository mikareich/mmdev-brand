import Contact from "./Contact";
import OurProducts from "./OurProducts";
import Showcase from "./Showcase";
import WhoWeAre from "./WhoWeAre";

export default function Home() {
  return (
    <article className="grid grid-cols-1 gap-6 sm:gap-16">
      <WhoWeAre />

      <OurProducts />

      <Showcase />

      <Contact />
    </article>
  );
}
