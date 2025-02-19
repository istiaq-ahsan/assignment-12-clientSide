import { RiDeleteBin5Line } from "react-icons/ri";

const FavouriteTable = ({ favBio, handleFavDelete }) => {
  const { _id, name, bioDataId, permanentDivision, occupation } = favBio || {};
  return (
    <tr>
      <td className="px-12 py-4 text-sm text-gray-700  whitespace-nowrap">
        {name}
      </td>
      <td className="px-12 py-4 text-sm text-gray-700  whitespace-nowrap">
        {bioDataId}
      </td>
      <td className="px-4 py-4 text-sm text-gray-700  whitespace-nowrap">
        {permanentDivision}
      </td>
      <td className="px-4 py-4 text-sm text-gray-700  whitespace-nowrap">
        {occupation}
      </td>
      <td className="px-4 py-4">
        <button onClick={() => handleFavDelete(_id)}>
          <RiDeleteBin5Line className="text-2xl text-red-500 hover:text-red-700" />
        </button>
      </td>
    </tr>
  );
};

export default FavouriteTable;
