import { useParams } from "react-router-dom";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../shared/LoadingSpinner";
import UseAuth from "../hooks/UseAuth";

const CheckOut = () => {
  const { id } = useParams();
  const axiosPublic = UseAxiosPublic();
  const { user } = UseAuth();
  const {
    data: contactReq,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["contactReq", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/bioDataDetails/${id}`);
      return data;
    },
  });
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  console.log(contactReq);

  return (
    <div className="pt-20">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-16 "
              src="https://img.icons8.com/?size=100&id=7SljV6rBUzxc&format=png&color=000000"
              alt="Logo"
            />
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Complete Your Payment By Stripe
          </p>

          <form>
            <div className="w-full mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Bio Data Id:
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                defaultValue={contactReq.bioDataId}
                placeholder="Biodata Id"
                aria-label="Biodata Id"
              />
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                User Email:
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                defaultValue={user?.email}
                readOnly
                placeholder="Email"
                aria-label="Email Address"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <button className="px-6 py-2 text-sm font-medium tracking-wide w-full text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
