import mainstackLogo from "../../assets/mainstack-logo.png";
import dashboard from "../../assets/icons/dashboard.svg";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const mainItems = [
    {
      title: "Dashboard",
      icon: dashboard,
    },
  ];
  return (
    <div>
      <img src={mainstackLogo} alt="logo" />
      <div className="">
        <SidebarItems items={mainItems} />
      </div>
    </div>
  );
};

export default Sidebar;
