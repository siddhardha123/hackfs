import { useState } from 'react';
import { useRouter } from 'next/router';

type ProjectComponentProps = {
  projectName: string;
};

const ProjectComponent: React.FC<ProjectComponentProps> = ({ Projects } : any) => {
  const [announcement, setAnnouncement] = useState('');
  const [meetingDateTime, setMeetingDateTime] = useState('');
  
  
  const stats =[
     {
        "name" : "NFTs",
        "number" : "5"
     },
     {
        "name" : "NFTs",
        "number" : "5"
     },
     {
        "name" : "NFTs",
        "number" : "5"
     },
     {
        "name" : "NFTs",
        "number" : "5"
     },
     
  ]
  const handleAnnouncementChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnnouncement(e.target.value);
  };

  const handleMeetingDateTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingDateTime(e.target.value);
  };

  const handleAnnouncementPublish = async () => {
    // Handle announcement publish logic here
const { data, error } = await supabase
.from('announcements')
.insert([
  { some_column: 'someValue', other_column: 'otherValue' },
])

    console.log('Publish announcement:', announcement);
  };

  const handleMeetingPublish = async () => {
    // Handle meeting publish logic here
    console.log('Publish meeting:', meetingDateTime);
  };
  
  return (
    <div className="flex flex-col justify-center space-y-8">
      <h1 className="text-4xl font-bold">Welcome to {Projects[0].name}</h1>

      
        <div className="flex flex-col  space-y-2">
           
          <p className="text-lg font-bold">Stats</p>
         
          {/* <div className="flex  space-x-12">
    {stats.map((stat) => (
      <div className="w-32 h-32 rounded-lg bg-blue-500 flex justify-center items-center" key={stat.name}>
        <h2 className="text-white font-bold text-2xl">{stat.number}</h2>
        <h2 className="text-white font-bold text-xl">{stat.name}</h2>
      </div>
    ))}
  </div> */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
  <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
      <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    </div>
    <div className="text-right">
      <p className="text-2xl">1,257</p>
      <p>cummulative engament</p>
    </div>
  </div>
  <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
      <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
    </div>
    <div className="text-right">
      <p className="text-2xl">557</p>
      <p>Donations</p>
    </div>
  </div>
  <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
      <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
    </div>
    <div className="text-right">
      <p className="text-2xl">$11,257</p>
      <p></p>
    </div>
  </div>
  <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
      <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="text-right">
      <p className="text-2xl">$75,257</p>
      <p>Total fund raised</p>
    </div>
  </div>
</div>

            {/* <p>No. of Donations: 10</p>
            <p>Total Amount of Donations: $1000</p>
            <p>No. of NFTs Minted: 5</p>
            <p>No. of Cumulative Likes: 50</p> */}
         
        </div>

        <div className="flex flex-col max-w-[50%] space-y-2">
          <p className="text-lg font-bold">Announcements</p>
          <textarea
            className="p-2 border border-gray-300 text-black rounded-md resize-none"
            placeholder="Write your announcement..."
            value={announcement}
            onChange={handleAnnouncementChange}
          ></textarea>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleAnnouncementPublish}
          >
            Publish Announcement
          </button>
      
      </div>

      <div className="flex flex-col max-w-[50%] space-y-2">
        <p className="text-lg font-bold">Schedule Meetings</p>
        <input
          type="datetime-local"
          className="p-2 border border-gray-300 text-black rounded-md"
          value={meetingDateTime}
          onChange={handleMeetingDateTimeChange}
        />
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          onClick={handleMeetingPublish}
        >
          Publish Meeting
        </button>
      </div>
    </div>
  );
};

export default ProjectComponent;
