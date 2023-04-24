interface SidebarItemProps {
  title: string;
  icon: string;
  active?: boolean;
}

const SidebarItems = ({ items }: { items: SidebarItemProps[] }) => {
  return (
    <div className="">
      {items.map((item) => (
        <div
          className={`flex ${item.active && "active-link"}`}
          key={crypto.randomUUID()}
        >
          <img src={item.icon} className="ml-8" />{" "}
          <span className="font-semibold text-lg items-center ml-2">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SidebarItems;
