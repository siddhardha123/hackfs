import { useState } from 'react';
import { LayoutDashboard, MessageSquare, User ,Video,Bitcoin,ListOrdered,LogOut  } from "lucide-react";

const App = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", icon: <LayoutDashboard />},
    { title: "Inbox", icon: <MessageSquare /> },
    { title: "Accounts", icon: <User />},
    { title: "Meetings", icon: <Video />},
    { title: "Donations", icon: <Bitcoin />},
    { title: "Leaderboard", icon: <ListOrdered />},
    { title: "Logout", icon:  <LogOut />,gap:true},
   
  ];

  const toggleSidebar = () => {
    setOpen(!open);
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
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
            >
              {Menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};

export default App;