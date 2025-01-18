import SectionTitle from "../../../shared/SectionTitle";
import Timeline from "./Timeline";

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-300">
      <SectionTitle
        heading={"How It Works"}
        subHeading={
          "Explore, connect, and take the next step towards finding your life partner."
        }
      ></SectionTitle>
      <Timeline></Timeline>
    </div>
  );
};

export default HowItWorks;
