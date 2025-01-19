import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Stat from "./Stat";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import SectionTitle from "../../../shared/SectionTitle";

const CounterStats = () => {
  const axiosSecure = UseAxiosSecure();
  // fetch stat data from server.
  const { data: statData, isLoading } = useQuery({
    queryKey: ["publicStat"],
    queryFn: async () => {
      const { data } = await axiosSecure("/public-stat");
      return data;
    },
  });
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  const { totalBioData, totalMaleBio, totalFemaleBio, couplePaired } =
    statData || {};

  console.log(statData);

  return (
    <div className="bg-gradient-to-b from-gray-300 to-white py-10">
      <div className="w-4/5 mx-auto">
        <div className="pb-10">
          <SectionTitle
            heading={"Success Counter"}
            subHeading={"Here is a overview of our Websites"}
          ></SectionTitle>
        </div>
        <Stat
          totalBioData={totalBioData}
          totalMaleBio={totalMaleBio}
          totalFemaleBio={totalFemaleBio}
          couplePaired={couplePaired}
        ></Stat>
      </div>
    </div>
  );
};

export default CounterStats;
