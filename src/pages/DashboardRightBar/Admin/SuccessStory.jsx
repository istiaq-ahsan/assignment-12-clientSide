import { useQuery } from "@tanstack/react-query";
import SuccessStoryTable from "../../../components/FavBioDataTable/SuccessStoryTable";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import LoadingSpinner from "../../../shared/LoadingSpinner";

const SuccessStory = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: allSuccesStory, isLoading } = useQuery({
    queryKey: ["successStory"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/reviewFor-admin`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">Success Story</h2>
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
                        Male Biodata Id
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-medium text-gray-500 "
                      >
                        Female Biodata Id
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-medium text-gray-500 "
                      >
                        View Story
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {allSuccesStory.map((story, index) => (
                      <SuccessStoryTable
                        key={index}
                        story={story}
                      ></SuccessStoryTable>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
