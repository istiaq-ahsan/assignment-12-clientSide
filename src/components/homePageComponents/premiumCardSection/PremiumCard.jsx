import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import LoadingSpinner from "../../../shared/LoadingSpinner";

const PremiumCard = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: premiumData, isLoading } = useQuery({
    queryKey: ["premiumBiodata"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/premium-biodata");
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  //   console.log(premiumData);

  return (
    <div className="w-11/12 mx-auto py-16">
      <div className="grid grid-cols-4 gap-5">
        {premiumData.map((data, index) => (
          <Card key={index} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default PremiumCard;
