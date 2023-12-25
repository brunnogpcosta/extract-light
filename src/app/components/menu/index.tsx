import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuOptions = [
  {
    id: '1',
    label: 'dashboard'
  },
  {
    id: '2',
    label: 'faturas'
  }
];

const Menu = () => {
  const pathName = usePathname();

  return (
    <div className="bg-[#1E1E22] rounded-md p-2 h-full mb-8 sm:mb-0 sm:w-[200px] w-auto">
      <ul>
        {menuOptions.map((option) => (
          <Link href={`/pages/${option.label}`} key={option.id}>
            <li className={`capitalize cursor-pointer mb-2 p-2 ${pathName === '/pages/' + option.label ? 'text-[#15D47B]' : ''}`}>
              {option.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
