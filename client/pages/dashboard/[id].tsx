import { useState } from 'react';
import { LayoutDashboard, MessageSquare, User, Video, Bitcoin, ListOrdered, LogOut } from "lucide-react";

import Home from '@/components/dashboard/Home'
import Donations from '@/components/dashboard/Donations'

const Leaderboard = () => {
  return <h2>Leaderboard Component</h2>;
};

const App = () => {
  const [open, setOpen] = useState(true);
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const Menus = [
    { title: "Home", icon: <LayoutDashboard />, component: <Home /> },
    { title: "Donations", icon: <Bitcoin />, component: <Donations /> },
    { title: "Leaderboard", icon: <ListOrdered />, component: <Leaderboard /> },
    { title: "Logout", icon: <LogOut />, gap: true },
  ];

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleMenuClick = (title) => {
    setActiveComponent(title);
  };

  return (
    <div className="flex rounded-xl">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-[#070122] text-white h-screen p-5  pt-8 relative duration-300`}
        onClick={toggleSidebar} // Toggle sidebar on click
      >
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left  text-2xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            ShipLit🚀
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
              onClick={() => handleMenuClick(Menu.title)}
            >
              {Menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7 text-white">
        {activeComponent === "Home" && <Home />}
        {activeComponent === "Donations" && <Donations />}
        {activeComponent === "Leaderboard" && <Leaderboard />}
      </div>
    </div>
  );
};

export default App;
