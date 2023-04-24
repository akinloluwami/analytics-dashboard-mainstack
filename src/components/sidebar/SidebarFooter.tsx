import profileImage from "../../assets/profile_image.png";
import more from "../../assets/icons/more.svg";

const SidebarFooter = () => {
  return (
    <div className="flex mb-12 mt-24 justify-between items-center">
      <div className="flex ml-8 items-center">
        <img src={profileImage} alt="Profile image" className="rounded-full" />
        <h2 className="ml-3 text-sec_gray font-medium">Blessing Daniels</h2>
      </div>
      <button className="mr-3">
        <img src={more} alt="More" />
      </button>
    </div>
  );
};

export default SidebarFooter;
