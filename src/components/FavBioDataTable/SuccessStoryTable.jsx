import { useState } from "react";
import StoryModal from "../modal/StoryModal";

const SuccessStoryTable = ({ story }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { selfId, partnerTd } = story || {};
  return (
    <tr>
      <td className="px-12 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {selfId}
      </td>
      <td className="px-12 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {partnerTd}
      </td>

      <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 md:rounded-full text-xs md:text-base"
          ></span>
          <span className="relative">View Story</span>
        </span>
        <StoryModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          story={story}
        ></StoryModal>
      </td>
    </tr>
  );
};

export default SuccessStoryTable;
