import { BiMaleFemale } from "react-icons/bi";
import MenuItem from "./MenuItem";
import { CiEdit } from "react-icons/ci";
import { HiOutlineHeart } from "react-icons/hi";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";

const CustomerMenu = () => {
  return (
    <>
      <MenuItem icon={CiEdit} label="Edit Biodata" address="edit-biodata" />
      <MenuItem
        icon={MdOutlineZoomOutMap}
        label="View Biodata"
        address="view-biodata"
      />
      <MenuItem
        icon={HiOutlineHeart}
        label="Favourite Biodata"
        address="favourite-biodata"
      />
      <MenuItem
        icon={RiContactsLine}
        label="Contact Request"
        address="contact-request"
      />

      <MenuItem icon={BiMaleFemale} label="Got Married" address="got-married" />
    </>
  );
};

export default CustomerMenu;
