import mainstackLogo from "../../assets/mainstack-logo.png";
import SidebarItems from "./SidebarItems";
import SidebarFooter from "./SidebarFooter";

import dashboard from "../../assets/icons/dashboard.svg";
import edit from "../../assets/icons/edit.svg";
import group from "../../assets/icons/group.svg";
import hourglass_empty from "../../assets/icons/hourglass_empty.svg";
import camera_add from "../../assets/icons/camera_add.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import subs from "../../assets/icons/subs.svg";
import file_present from "../../assets/icons/file_present.svg";
import alarm from "../../assets/icons/alarm.svg";

const Sidebar = () => {
  const mainItems = [
    {
      title: "Dashboard",
      icon: dashboard,
      active: true,
    },
    {
      title: "Item 1",
      icon: edit,
    },
    {
      title: "Item 2",
      icon: group,
    },
    {
      title: "Item 3",
      icon: hourglass_empty,
    },
  ];
  const otherItems = [
    {
      title: "Item 4",
      icon: camera_add,
    },
    {
      title: "Item 5",
      icon: deleteIcon,
    },
  ];
  const otherItems2 = [
    {
      title: "Item 6",
      icon: subs,
    },
    {
      title: "Item 7",
      icon: file_present,
    },
    {
      title: "Item 8",
      icon: alarm,
    },
  ];
  return (
    <div className="h-screen overflow-y-scroll">
      <div className="sticky top-0 z-50 w-full h-16 bg-white">
        <img src={mainstackLogo} className="ml-8" alt="logo" />
      </div>
      <div className="">
        <SidebarItems items={mainItems} />
        <SidebarItems items={otherItems} title="Others 1" />
        <SidebarItems items={otherItems2} title="Others 2" />
        <SidebarFooter />
      </div>
    </div>
  );
};

export default Sidebar;
