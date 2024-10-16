import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



const Cities = () => {
    const [cityName, setcityName] = useState([]);
    const getCites = async () => {
        try {
        const response = await axios.get('http://localhost:3000/events');
        // console.log(response.data[0].city);
        setcityName(response.data);
    } catch (error) {
        console.log(error?.message);
    }
    };
    useEffect(() => {
        getCites();
    }, []);
    
    return (
    <div className='h-[40vh] w-full flex items-center justify-center gap-4 bg-zinc-300 px-10 mt-10'>
        {cityName.length>0?cityName.map((item,index)=>(
            <Link to={`/cities/${item.city.name}`} key={index} className='h-[14vw] w-[14vw] cursor-pointer rounded-md bg-red-500 overflow-hidden'>
                <div className='h-[60%] w-full bg-blue-500'>
                    <img src={item?.city?.url} className='h-full w-full object-cover' alt="" />
                </div>
                <div className='h-[40%] w-full text-white py-4 px-2'>
                {cityName[index]?.city?.name}
                </div>
            </Link>
        )):"Nothing to show"}
    </div>
  )
}

export default Cities