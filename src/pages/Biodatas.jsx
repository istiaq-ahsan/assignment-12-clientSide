import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
import BioDataCard from "../components/bioDataComponents/BioDataCard";
import LoadingSpinner from "../shared/LoadingSpinner";

const Biodatas = () => {
  const axiosPublic = UseAxiosPublic();

  const {
    data: allBioData = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bio"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/all-bioData`);
      return data;
    },
  });
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  console.log(allBioData);

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {allBioData.map((bioData, index) => (
          <BioDataCard key={index} bioData={bioData}></BioDataCard>
        ))}
      </div>
    </div>
  );
};

export default Biodatas;
