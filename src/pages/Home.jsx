import Banner from "../components/homePageComponents/banner/Banner";
import HowItWorks from "../components/homePageComponents/howItWorksSection/HowItWorks";
import PremiumCard from "../components/homePageComponents/premiumCardSection/PremiumCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PremiumCard></PremiumCard>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
