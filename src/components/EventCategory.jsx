import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EventCategory = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/events');
      // console.log(response.data[0]);
      setEvents(response.data);
    } catch (error) {
      console.log(error?.message);
    }
  };
  

  useEffect(() => {
    getEvents();
  }, []); // Removed `events` from dependency array

  return (
    <div className='flex items-center justify-center gap-10'>
      {events.length > 0 ? (
        events.map((event) => (
          <Link to={`/eventcategory/${event.category}`}  className='h-[10vw] w-[10vw] bg-red-500 text-white cursor-pointer flex items-center justify-center rounded-md ' key={event.id}>
            <p>{event.category}</p>
          </Link>
        )) 
      ) : (
        <p>No events available</p>
      )}
    </div>
  );
};

export default EventCategory;
