import React, { useEffect, useState } from 'react';
import "../App.css";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Pagination = () => {
  const imagesArray = [
    { color: "red", image: "https://media.istockphoto.com/id/497317250/photo/new-year-party.jpg?s=2048x2048&w=is&k=20&c=RUAv1CAWG4BsLe5o786JZZ44At6UJvv0BsdaINCKUSA=", alt: "image1" },
    { color: "yellow", image: "https://media.istockphoto.com/id/513550806/photo/teenager-hipster-friends-partying-by-blowing-colorful-confetti-from-hands.jpg?s=2048x2048&w=is&k=20&c=5snHYKpLAzdix5TSOLoVKsIJ5ZI4ZElerwZV_gH8W08=", alt: "image2" },
    { color: "green", image: "https://media.istockphoto.com/id/1222073245/photo/football-fans-celebrating-a-victory-in-stadium.jpg?s=2048x2048&w=is&k=20&c=qZEoaFe_BAzXW0zVyqhuuhTFL2StjRiP_7j8mPrA5Js=", alt: "image3" },
    { color: "green", image: "https://images.unsplash.com/photo-1611105849269-e3c1815fea47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "image4" }
  ];

  const [searchResult, setSearchResult] = useState(null);
  const [leftMoveX, setLeftMoveX] = useState(0);
  const [rightMoveX, setRightMoveX] = useState(imagesArray.length);
  const [query, setQuery] = useState("");

  // Fetch search data
  const getSearchData = async () => {
    try {
      
      const response = await axios(`http://localhost:3000/events?query=${query}`);
      // console.log(response.data);
      
      // Filter events based on city, category, and date
      const filtered = response.data.filter(event =>
        event.city?.name.toLowerCase().includes(query.toLowerCase())
      );
      
      // console.log(filtered);
      
      // Set search result
      setSearchResult(filtered);
      
      setSearchResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLeftClick = () => {
    if (leftMoveX > 0) {
      setLeftMoveX(prev => prev - 1);
      setRightMoveX(prev => prev + 1);
    }
  };

  const handleRightClick = () => {
    if (rightMoveX > 1) {
      setRightMoveX(prev => prev - 1);
      setLeftMoveX(prev => prev + 1);
    }
  };

  // Fetch search data when query changes
  useEffect(() => {
    getSearchData();
  }, [query]);

console.log(searchResult);

  return (
    <div className='h-[70vh] pb-20 w-full bg-zinc-100'>
      <header>
        <nav className='h-[100px] w-full relative flex items-center justify-start px-[4vw] py-3 border-b-[1px] border-zinc-300'>
          <h1 className='text-red-500 text-xl font-bold ml-[0vw] pointer-events-none'>Eventopia</h1>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='w-1/3 h-[3vw] px-4 text-zinc-400 font-semibold text-lg rounded-full border-[1px] border-zinc-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none'
            placeholder='Search'
          />


{/* here */}
{/* <div className="z-[401] top-20 left-0 max-h-[50vh] bg-zinc-300   overflow-x-hidden overflow-y-auto   absolute sm:overflow-y-auto rounded w-full  sm:w-[63%] sm:max-h-[50vh]  sm:top-[100%]">

{search.map((a,i)=>(
  <Link to={`/${a.media_type}/${a.media_type}details/${a.id}`} key={i} className="hover:sm:text-black hover:bg-zinc-400 sm:text-zinc-600 border-b border-zinc-800 block  gap-2 sm:p-2 bg-zinc-300">
  <img className="w-16 h-16 rounded-xl px-2 w-10  py-2 sm:p-0 sm:h-[4vw] sm:w-16 object-cover inline mr-4 sm:rounded-lg sm:drop-shadow-lg " src={a.backdrop_path || a.profile_path || a.poster_path ?`https://image.tmdb.org/t/p/original/${a.backdrop_path || a.poster_path || a.profile_path}`:"https://imgs.search.brave.com/AgRYlUxNlzd2KgQD6fTNOM8Y5ebx7660-bzT2XSvdio/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzgxLzg0Lzcx/LzM2MF9GXzU4MTg0/NzE3Nl9lRjU0MFhx/RkdIRGRHUFp4eWg1/TnRXSE56Z3MwWEZr/Ni5qcGc"} alt="" />
  <span className="text-md overflow-hidden flex-nowrap text-black sm:text-md sm:text-md sm:text-zinc-900 font-semibold">{a.original_title || a.original_name || a.title || a.name}</span>
</Link>
))} */}

{/* here */}

          {/* Search Result Display */}
          {query.length > 0 && (
            <div className='absolute z-[10] max-h-[30vh]  overflow-y-auto left-1/2 bottom-1/3 translate-y-full -translate-x-1/2  min-h-[10vh] w-1/3 flex flex-col bg-zinc-400'>
              {searchResult.length>0 && searchResult.map((item, index) => (
                <Link
                  to={`/event/${item.id}`} // Assuming each event has a unique ID
                  key={item.id}
                  className='h-[10vh] w-full flex items-center px-3 gap-3 py-4 bg-red-400 border-b-[1px] border-zinc-800'
                  style={{ backgroundColor: item.color }} // Inline style for dynamic color
                
                >
                  <div className='h-[3vw] w-[3vw] rounded-md  overflow-hidden'><img src={item.city?.url} alt="" className='h-full w-full object-cover'/></div>
                  <p className='text-white'>{item.city?.name}</p>
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      <section className='h-[50vh] w-[78%] relative left-1/2 -translate-x-1/2 overflow-hidden'>
        <section className={`h-full flex items-center justify-center gap-20 px-20 absolute left-0`} style={{ transform: `translateX(-${leftMoveX * 75}vw)` }}>
          {imagesArray.map((item, index) => (
            <article key={index} className='image h-[90%] min-w-[69vw] overflow-hidden rounded-md transition duration-75'>
              <img className='h-full w-full object-cover' src={item.image} alt={item.alt} />
            </article>
          ))}
        </section>

        {/* Left Button */}
        {leftMoveX > 0 && (
          <button onClick={handleLeftClick} className='absolute flex items-center justify-center text-xl h-[50px] w-[50px] cursor-pointer rounded-full bg-zinc-400 left-0 top-1/2 -translate-y-1/2'>
            <MdOutlineKeyboardArrowLeft />
          </button>
        )}

        {/* Right Button */}
        {rightMoveX > 1 && (
          <button onClick={handleRightClick} className='absolute flex items-center justify-center text-xl h-[50px] w-[50px] cursor-pointer rounded-full bg-zinc-400 right-0 top-1/2 -translate-y-1/2'>
            <MdOutlineKeyboardArrowRight />
          </button>
        )}
      </section>
    </div>
  );
};

export default Pagination;
