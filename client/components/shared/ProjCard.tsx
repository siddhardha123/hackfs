import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import Link from "next/link";
const ProjCard = ({id,name,tagline, profile ,likes}: any) => {
 
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Stop event propagation to prevent the card click event

    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleClick = () => {
    // Navigate to individual page
   
  };

  return (

    <Link key={id} href={`/projects/${id ? id.toString() : ''}`}>
    <div
      className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white mb-4 cursor-pointer transform transition-transform hover:scale-105"
      onClick={handleClick}
    >
      <img className="w-full h-56 object-cover" src={profile} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl">{name}</div>
          <button
            className={`flex items-center text-pink-500 focus:outline-none ${
              isLiked ? 'text-pink-600' : ''
            }`}
            onClick={handleLike}
          >
            <Heart className="w-5 h-5 mr-2" />
            {likes} {likes === 1 ? 'like' : 'likes'}
          </button>
        </div>
        <p className="text-gray-700 text-base">{tagline}</p>
      </div>
    </div>
    </Link>
  );
};

export default ProjCard;
