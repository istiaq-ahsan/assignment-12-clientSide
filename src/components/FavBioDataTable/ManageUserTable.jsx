import UpdateUserStatus from "../modal/UpdateUserStatus";
import { useState } from "react";
import UpdateUserRole from "../modal/UpdateUserRole";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { toast } from "react-toastify";

const ManageUserTable = ({ user, refetch }) => {
  const { name, email, role, status } = user || {};
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [roleModalOpen, setRoleModalOpen] = useState(false);
  const axiosSecure = UseAxiosSecure();

  const updateRole = async (selectedRole) => {
    if (role === selectedRole) return;
    try {
      await axiosSecure.patch(`/user/role/${email}`, {
        role: selectedRole,
      });
      toast.success("Role Updated Successfully");
      refetch();
    } catch (err) {
      console.log(err);
    } finally {
      setRoleModalOpen(false);
    }
  };

  const updateStatus = async (selectedStatus) => {
    if (role === selectedStatus) return;
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
      <td className="px-4 py-4 text-sm text-gray-700  whitespace-nowrap">
        {role}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        {status === "Premium" ? (
          <span className="text-yellow-500 ">{status}</span>
        ) : status === "Requested" ? (
          <span className="text-blue-800 ">{status}</span>
        ) : (
          <span className="text-gray-700 ">Normal</span>
        )}
      </td>
      <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => setRoleModalOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-white leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gray-400  rounded-full"
          ></span>
          <span className="relative">Update Role</span>
        </span>

        <UpdateUserRole
          role={role}
          roleModalOpen={roleModalOpen}
          setRoleModalOpen={setRoleModalOpen}
          updateRole={updateRole}
        />
      </td>
      <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => setStatusModalOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Update Status</span>
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

export default ManageUserTable;
