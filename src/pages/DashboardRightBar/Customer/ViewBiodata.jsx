import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAuth from "../../../hooks/UseAuth";
import ViewComponent from "./customerComponents/ViewComponent";

const ViewBiodata = () => {
  const { user } = UseAuth();
  const {
    data: bio,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bio"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/bioData/${user?.email}`
      );
      return data;
    },
  });
  console.log(bio);

  return (
    <div>
      <ViewComponent bio={bio}></ViewComponent>
    </div>
  );
};

export default ViewBiodata;
