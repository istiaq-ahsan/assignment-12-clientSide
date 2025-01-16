import { MdUpdate } from "react-icons/md";
import UpdateUserStatus from "../modal/UpdateUserStatus";
import { useState } from "react";
import UpdateUserRole from "../modal/UpdateUserRole";

const ManageUserTable = ({ user }) => {
  const { name, email, role, status } = user || {};
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [roleModalOpen, setRoleModalOpen] = useState(false);
  return (
    <tr>
      <td className="px-12 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {name}
      </td>
      <td className="px-12 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {email}
      </td>
      <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {role}
      </td>
      {status ? (
        <td className="px-4 py-4 text-sm text-yellow-500 dark:text-gray-300 whitespace-nowrap">
          {status}
        </td>
      ) : (
        <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
          Normal
        </td>
      )}
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
        />
      </td>
    </tr>
  );
};

export default ManageUserTable;
