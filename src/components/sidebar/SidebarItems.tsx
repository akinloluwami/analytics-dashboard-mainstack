interface SidebarItemProps {
  title: string;
  icon: string;
}

const SidebarItems = ({ items }: { items: SidebarItemProps[] }) => {
  return (
    <div className="">
      {items.map((item) => (
        <div className="" key={crypto.randomUUID()}>
          <img src={item.icon} /> {item.title}
        </div>
      ))}
    </div>
  );
};

export default SidebarItems;
