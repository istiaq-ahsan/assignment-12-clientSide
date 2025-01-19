import { RxDashboard } from "react-icons/rx";
import MenuItem from "./MenuItem";
import { MdOutlineZoomOutMap, MdWorkspacePremium } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { FaBook } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={RxDashboard}
        label="Admin Dashboard"
        address="admin-dashboard"
      />
      <MenuItem
        icon={MdOutlineZoomOutMap}
        label="Manage Users"
        address="manage-users"
      />
      <MenuItem
        icon={MdWorkspacePremium}
        label="Approved Premium"
        address="approved-premium"
      />
      <MenuItem
        icon={RiContactsLine}
        label="Approved Contact Request"
        address="approved-contact"
      />
      <MenuItem icon={FaBook} label="Success Story" address="success-story" />
    </>
  );
};

export default AdminMenu;
