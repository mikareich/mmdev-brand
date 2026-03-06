import BorderBox from "~/components/BorderBox";
import Section from "~/components/Section";

export default function OurProducts() {
  return (
    <Section
      level={2}
      title="Our Products"
      headerActions={<div>OMG</div>}
      contents={[
        <BorderBox
          asChild
          className="p-1 sm:p-2 border-theme-border-subtle"
          key={1}
        >
          <div>
            Our packages—Postcard, Letter, and Parcel—give you exactly what you
            need with zero bloat. Our process is just as simple:
            <ol className="list-decimal list-inside">
              <li>Align: We define your goals and scope.</li>
              <li>Build: We engineer a fast, modern site.</li>
              <li>Launch: We deploy your site and hand you the keys.</li>
            </ol>
          </div>
        </BorderBox>,
        <BorderBox
          asChild
          className="p-1 sm:p-2 border-theme-border-subtle"
          key={2}
        >
          <div>
            Our packages—Postcard, Letter, and Parcel—give you exactly what you
            need with zero bloat. Our process is just as simple:
            <ol className="list-decimal list-inside">
              <li>Align: We define your goals and scope.</li>
              <li>Build: We engineer a fast, modern site.</li>
              <li>Launch: We deploy your site and hand you the keys.</li>
            </ol>
          </div>
        </BorderBox>,
      ]}
    />
  );
}
