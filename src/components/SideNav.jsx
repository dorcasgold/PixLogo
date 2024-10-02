import { Image, PencilRuler, Shield } from "lucide-react"
import { useState } from "react"

function SideNav({ selectedIndex }) {
  const menuList = [
    {
      id: 1,
      name: 'Icon',
      icon: PencilRuler
    },
    {
      id: 2,
      name: 'Background',
      icon: Image
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="border shadow-sm h-full">
      <div>
        {menuList.map((menu, index) => (
          <h2
            key={index}
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
            className={`p-2 text-lg px-7 my-2 cursor-pointer hover:bg-primary hover:text-white flex gap-2 items-center
              ${activeIndex === index ? 'bg-primary text-white' : 'text-gray-500'}
              `}
          >
            {/* Display icon on all screens */}
            <menu.icon />

            {/* Display text only on medium and larger screens */}
            <span className="hidden md:inline">
              {menu.name}
            </span>
          </h2>
        ))}
      </div>
    </div>
  );
}

export default SideNav