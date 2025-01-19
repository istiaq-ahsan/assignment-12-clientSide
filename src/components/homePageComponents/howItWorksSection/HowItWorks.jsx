import SectionTitle from "../../../shared/SectionTitle";
import Timeline from "./Timeline";

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-b from-slate-600 to-slate-400 py-10">
      <div className="pb-10 text-white">
        <SectionTitle
          heading={"How It Works"}
          subHeading={
            "Explore, connect, and take the next step towards finding your life partner."
          }
        ></SectionTitle>
      </div>
      <Timeline></Timeline>
    </div>
  );
};

export default HowItWorks;
