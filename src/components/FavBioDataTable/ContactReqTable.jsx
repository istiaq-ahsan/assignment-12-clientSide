import { RiDeleteBin5Line } from "react-icons/ri";

const ContactReqTable = ({ contactData, handleReqDelete }) => {
  const { _id, bioDataName, bioDataId, status, bioDataEmail, bioDataNumber } =
    contactData || {};
  return (
    <tr>
      <td className="px-12 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {bioDataName}
      </td>
      <td className="px-12 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {bioDataId}
      </td>
      <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {status}
      </td>
      {status === "pending" ? (
        <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
          Wait for approve
        </td>
      ) : (
        <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
          {bioDataNumber}
        </td>
      )}
      {status === "pending" ? (
        <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
          Wait for approve
        </td>
      ) : (
        <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
          {bioDataEmail}
        </td>
      )}

      <td className="px-4 py-4">
        <button onClick={() => handleReqDelete(_id)}>
          <RiDeleteBin5Line className="text-2xl text-red-500 hover:text-red-700" />
        </button>
      </td>
    </tr>
  );
};

export default ContactReqTable;
