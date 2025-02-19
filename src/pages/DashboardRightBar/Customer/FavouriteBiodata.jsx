import { useQuery } from "@tanstack/react-query";
import FavouriteTable from "../../../components/FavBioDataTable/FavouriteTable";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import { toast } from "react-toastify";

const FavouriteBiodata = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const {
    data: favAllBio,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["favAllBioData", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`favBioData/${user?.email}`);
      return data;
    },
  });

  // console.log(favAllBio);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  const handleFavDelete = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/favOneBiodata/${id}`);
      toast.success("Deleted Successfully");
      refetch();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="flex items-center justify-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">
          Favourite Biodata Information
        </h2>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full text-center divide-y divide-gray-200 ">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-medium text-gray-500 "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-medium text-gray-500 "
                    >
                      Biodata Id
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-medium text-gray-500 "
                    >
                      Permanent Address
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-medium text-gray-500 "
                    >
                      Occupation
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-medium text-gray-500 "
                    >
                      Delete Button
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {favAllBio?.map((favBio, index) => (
                    <FavouriteTable
                      key={index}
                      favBio={favBio}
                      handleFavDelete={handleFavDelete}
                    ></FavouriteTable>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteBiodata;
