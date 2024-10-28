import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { dataContext } from '../context/Context';

const ProfileButton = () => {
  const data = useContext(dataContext); // Corrected destructuring
  console.log(data);
  

  return (
    <Link to="/profile">
      <img
        src={data} // Add default image if `data` is empty
        className="h-[40px] w-[40px] object-cover rounded-full object-cover bg-cyan-600 text-white"
        alt="Profile"
      />
    </Link>
  );
};

export default ProfileButton;
