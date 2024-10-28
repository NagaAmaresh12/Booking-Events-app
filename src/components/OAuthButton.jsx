import React from 'react'
import { Link } from 'react-router-dom'

const OAuthButton = () => {
  return (
    <>
        <aside className='relative flex items-center justify-between h-[2vh] w-full'>
        <div className="w-[45%] h-[1px] bg-gradient-to-r from-gray-400 via-black to-gray-400"></div>
        <h5>Or</h5>
        <div className="w-[45%] h-[1px] bg-gradient-to-r from-gray-400 via-black to-gray-400"></div>
        </aside>

        <button className='p-4 w-3/4 relative left-1/2 -translate-x-1/2 my-2 rounded-full border-[1px] border-zinc-400 outline-none focus:outline-none'>Continue with Google</button>
        <Link to="/forget-password" className='underline block text-center outline-none focus:outline-none'>Forget Password?</Link>
    </>
  )
}

export default OAuthButton