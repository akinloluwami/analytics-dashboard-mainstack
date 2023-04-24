interface SidebarItemProps {
  title: string;
  icon: string;
  active?: boolean;
}

const SidebarItems = ({
  items,
  title,
}: {
  items: SidebarItemProps[];
  title?: string;
}) => {
  return (
    <div className="my-8">
      <p className="uppercase ml-8 mb-3 font-medium text-sec_gray text-sm">
        {title}
      </p>
      {items.map((item) => (
        <div
          className={`flex mb-2 transition-colors cursor-pointer py-2 hover:bg-orange-100 ${
            item.active && "active-link"
          }`}
          key={crypto.randomUUID()}
        >
          <img src={item.icon} className="ml-8" />{" "}
          <span className="font-semibold items-center ml-2 text-sec_gray">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SidebarItems;
