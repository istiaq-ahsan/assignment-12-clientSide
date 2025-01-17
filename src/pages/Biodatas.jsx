import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
import BioDataCard from "../components/bioDataComponents/BioDataCard";
import LoadingSpinner from "../shared/LoadingSpinner";
import Sidebar from "../components/bioDataComponents/Sidebar";

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
    <div className="w-11/12 py-10 mx-auto ">
      <div className="flex gap-5">
        <div className="md:w-[30%] border border-gray-100 rounded-md shadow-lg p-5 top-0 left-0">
          <Sidebar></Sidebar>
        </div>
        <div className="md:w-[70%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {allBioData.map((bioData, index) => (
              <BioDataCard key={index} bioData={bioData}></BioDataCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodatas;
