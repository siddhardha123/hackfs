import React, { useState } from "react";
import { Heart, Bell } from "lucide-react";
import Navbar from "../../components/shared/Navbar";

const Project: React.FC = ({projdata}:any) => {
  const [likedAnnouncements, setLikedAnnouncements] = useState<string[]>([]);
   

  const handleLike = (announcement: string) => {
    if (likedAnnouncements.includes(announcement)) {
      setLikedAnnouncements((prevLikedAnnouncements) =>
        prevLikedAnnouncements.filter((a) => a !== announcement)
      );
    } else {
      setLikedAnnouncements((prevLikedAnnouncements) => [
        ...prevLikedAnnouncements,
        announcement,
      ]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap mx-20">
        <div className="w-full px-2">
          <div className="text-white shadow-lg p-4 mb-4 profile-card">
            <div className="flex items-start">
              <img
                className="w-48 h-48 rounded-lg mr-4"
                src={projdata.profile}
                alt="Profile Photo"
              />
              <div>
                <div>
                <h2 className="text-6xl font-bold">{projdata.name}</h2>
                <p className="text-white text-xl">{projdata.tagline}</p>
                </div>
                <div className="flex items-center mt-2 text-2xl">
                  <Heart className="w-5 h-5 text-pink-500 mr-1" />
                  <span className="text-gray-600">{projdata.likes} {projdata.likes === 1 ? "like" : "likes"}</span>
                </div>
              </div>
              <div>
              <a href="/dashboard" className="flex ml-20 mt-20 py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Donate
                        </a>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-6">About</h3>
            <p className="text-gray-300 text-xl">{projdata.description}</p>
            <div className="flex justify-between mt-6">
              <div className="w-3/4 pr-2">
                <div className=" rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Bell className="w-5 h-5 text-gray-600 mr-2" />
                    <h3 className="text-lg font-bold">Announcements</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-200 rounded-lg p-4 flex items-center">
                      <p className="text-gray-700 flex-grow">
                        Announcement 1 Lorem dsfiasjdf siduh fasoi air uhtfaeiora aisuf h aidrutghipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <button
                        className={`flex items-center text-pink-500 focus:outline-none ${
                          likedAnnouncements.includes("announcement1") ? "text-pink-600" : ""
                        }`}
                        onClick={() => handleLike("announcement1")}
                      >
                        <Heart className="w-5 h-5 mr-2" />
                        {likedAnnouncements.includes("announcement1") ? "Unlike" : "Like"}
                      </button>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-4 flex items-center">
                      <p className="text-gray-700 flex-grow">
                        Announcement 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <button
                        className={`flex items-center text-pink-500 focus:outline-none ${
                          likedAnnouncements.includes("announcement2") ? "text-pink-600" : ""
                        }`}
                        onClick={() => handleLike("announcement2")}
                      >
                        <Heart className="w-5 h-5 mr-2" />
                        {likedAnnouncements.includes("announcement2") ? "Unlike" : "Like"}
                      </button>
                    </div>
                    {/* Add more announcements as needed */}
                  </div>
                </div>
              </div>
              <div className="w-1/4 pl-2">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg text-black font-bold">Scheduled Meetings</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-200 rounded-lg p-4 flex items-center justify-between">
                      <p className="text-gray-700">Office hours</p>
                      <button className="bg-pink-500 text-white px-3 py-2 rounded">
                        Join
                      </button>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-4 flex items-center justify-between">
                      <p className="text-gray-700">Community calls</p>
                      <button className="bg-pink-500 text-white px-3 py-2 rounded">
                        Join
                      </button>
                    </div>
                    {/* Add more scheduled meetings as needed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
