import mainstackLogo from "../../assets/mainstack-logo.png";
import SidebarItems from "./SidebarItems";

import dashboard from "../../assets/icons/dashboard.svg";
import edit from "../../assets/icons/edit.svg";
import group from "../../assets/icons/group.svg";
import hourglass_empty from "../../assets/icons/hourglass_empty.svg";

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
      icon: dashboard,
    },
    {
      title: "Item 5",
      icon: edit,
    },
  ];
  const otherItems2 = [
    {
      title: "Item 6",
      icon: dashboard,
    },
    {
      title: "Item 7",
      icon: edit,
    },
    {
      title: "Item 8",
      icon: edit,
    },
  ];
  return (
    <div>
      <img src={mainstackLogo} className="ml-8" alt="logo" />
      <div className="">
        <SidebarItems items={mainItems} />
        <SidebarItems items={otherItems} title="Others 1" />
        <SidebarItems items={otherItems2} title="Others 2" />
      </div>
    </div>
  );
};

export default Sidebar;
