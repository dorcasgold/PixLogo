import { Image } from "lucide-react";
import { useState } from "react";
import person from './person.gif';
import ratio from './ratio.gif';


function SideNav({ selectedIndex }) {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: person,
    },
    {
      id: 2,
      name: "Background",
      icon: ratio,
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="border shadow-sm border-y-0 border-l-0 border-r-[1px] h-screen">
      <div>
        {menuList.map((menu, index) => (
          <h2
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
            className={`p-2 text-lg px-7 text-gray-300 my-2 cursor-pointer bg-slate-900 hover:bg-primary hover:text-white flex gap-2 items-center
              ${activeIndex === index && "bg-gray-700 text-white"}
              `}
            key={index}
          >
            {typeof menu.icon === "string" ? (
              <img src={menu.icon} alt={menu.name} className="w-10 h-10" />
            ) : (
              <menu.icon className="w-6 h-6" />
            )}
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
