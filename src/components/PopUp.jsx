import React from 'react'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const PopUp = ({setFunc,question,setConfirm}) => {
    return (
        <div>
            <section className='h-[40vh] w-[40vw] absolute left-1/2 top-1/2 bg-zinc-900 -translate-x-1/2 -translate-y-1/2 rounded-md flex flex-col justify-center items-center gap-5'>
                <p className='text-zinc-300 font-light'>&nbsp; <span className='text-red-600 font-semibold underline'>{question}</span></p>
                <div className='text-white text-4xl'><HiOutlineEmojiSad /></div>
                <section className='flex items-center  w-full gap-20 justify-center'>
                    <Link to="/signin"><button onClick={() => setConfirm(true)} className='text-white text-xl px-5 py-4 rounded-sm bg-red-800 '>Yes</button></Link>
                    <button onClick={() => setFunc(false)} className='text-white text-xl px-5 py-4 rounded-sm bg-red-800 '>No</button>
                </section>
            </section>
        </div>
    )
}

export default PopUp