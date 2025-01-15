import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import ContactReqTable from "../../../components/FavBioDataTable/ContactReqTable";
import { toast } from "react-toastify";

const ContactRequest = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const {
    data: contactAllData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["contactReqData", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`contact-req/${user?.email}`);
      return data;
    },
  });
  console.log(contactAllData);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  const handleReqDelete = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/contact-req-dlt/${id}`);
      toast.success("Deleted Successfully");
      refetch();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="flex items-center justify-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          Contact Request
        </h2>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full text-center divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Biodata Id
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Mobile No
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Delete Button
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {contactAllData.map((contactData, index) => (
                    <ContactReqTable
                      key={index}
                      contactData={contactData}
                      handleReqDelete={handleReqDelete}
                    ></ContactReqTable>
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

export default ContactRequest;
