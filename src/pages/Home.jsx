import { Helmet } from "react-helmet-async";
import Banner from "../components/homePageComponents/banner/Banner";
import Faq from "../components/homePageComponents/faqSection/Faq";
import HowItWorks from "../components/homePageComponents/howItWorksSection/HowItWorks";
import PremiumCard from "../components/homePageComponents/premiumCardSection/PremiumCard";
import CounterStats from "../components/homePageComponents/successCounterSection/CounterStats";
import SuccessStory from "../components/homePageComponents/successStorySection/SuccessStory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HeartMatch || Home</title>
      </Helmet>
      <Banner></Banner>
      <PremiumCard></PremiumCard>
      <HowItWorks></HowItWorks>
      <CounterStats></CounterStats>
      <SuccessStory></SuccessStory>
      <Faq></Faq>
    </div>
  );
};

export default Home;
