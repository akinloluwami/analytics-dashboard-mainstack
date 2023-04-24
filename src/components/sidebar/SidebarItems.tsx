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
    <div className="">
      <p>{title}</p>
      {items.map((item) => (
        <div
          className={`flex my-6 ${item.active && "active-link"}`}
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
