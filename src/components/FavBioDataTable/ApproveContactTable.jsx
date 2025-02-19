import { useState } from "react";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { toast } from "react-toastify";
import UpdateUserStatus from "../modal/UpdateUserStatus";

const ApproveContactTable = ({ oneUser, refetch }) => {
  const axiosSecure = UseAxiosSecure();
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const { name, email, biodataId, status } = oneUser || {};

  const updateStatus = async (selectedStatus) => {
    if (status === selectedStatus) return;
    try {
      await axiosSecure.patch(`/user/status/${email}`, {
        status: selectedStatus,
      });
      toast.success("Status Updated Successfully");
      refetch();
    } catch (err) {
      console.log(err);
    } finally {
      setStatusModalOpen(false);
    }
  };

  return (
    <tr>
      <td className="px-12 py-4 text-sm text-gray-700  whitespace-nowrap">
        {name}
      </td>
      <td className="px-12 py-4 text-sm text-gray-700  whitespace-nowrap">
        {email}
      </td>

      {biodataId ? (
        <td className="px-4 py-4 text-sm text-gray-800  whitespace-nowrap">
          {biodataId}
        </td>
      ) : (
        <td className="px-4 py-4 text-sm text-gray-700  whitespace-nowrap">
          Not Created
        </td>
      )}
      <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => setStatusModalOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Approve Request</span>
        </span>

        <UpdateUserStatus
          status={status}
          statusModalOpen={statusModalOpen}
          setStatusModalOpen={setStatusModalOpen}
          updateStatus={updateStatus}
        />
      </td>
    </tr>
  );
};

export default ApproveContactTable;
