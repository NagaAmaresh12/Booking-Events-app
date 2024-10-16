import React, { useState } from 'react'

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const formDetails = [{ title: "name", type: "text" }, { title: "email", type: "email" }, { title: "password", type: "password" }, { title: "Re-password", type: "password" }]
  return (
    <div>
      <header className='h-screen w-full bg-black overflow-hidden'>
        <nav className='h-[60px] w-full flex items-center justify-between px-[7vw] '>
          <h1 className='text-red-500 text-xl font-bold ml-[0vw] pointer-events-none'>Eventopia</h1>
          <h4 className='text-lg text-white font-normal cursor-pointer'>Signup</h4>
        </nav>
        <div className='h-[60vh] w-[29%] relative left-[50%] top-[45%] -translate-x-1/2 -translate-y-1/2'>
          {isSignIn ?
            // signIn
            <form action='/' method='POST' className='flex flex-col gap-[3vw] h-full w-full '>

              <div className='relative flex items-end justify-evenly w-full'>
                <h1 className='text-white text-4xl px-4 pt-4 w-full'>Welcome Back!</h1>
                <h4 className='w-[8vw] text-blue-400 inline-block hover:cursor-pointer' onClick={() => setisSignIn(false)}>Sign Up</h4>
              </div>

              <div className='relative  w-full'>

                <label htmlFor="" className='m-0 p-0 absolute left-0 top-[-20px] text-zinc-300 text-sm'>Email</label>
                <input type="email" name="email" className='text-white w-full h-[2vw] bg-transparent p-4 rounded-sm border-b-[1px] border-zinc-100 focus:outline-none focus:border-red-500' />

              </div>
              <div className='relative w-full'>

                <label htmlFor="" className='m-0 p-0 absolute left-0 top-[-20px] text-zinc-300 text-sm'>Password</label>
                <input type="password" name="password" className='text-white w-full h-[2vw] bg-transparent p-4 rounded-sm border-b-[1px] border-zinc-100 focus:outline-none focus:border-red-500' />

              </div>

              <button type='submit' className='mt-10 block bg-blue-500 w-3/4 rounded-full border-none focus:scale-[1.2] absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2   p-4 text-white'>Log In</button>
            </form>
            // SignUp
            : <form action="/" className='h-full w-full flex  flex-col items-start gap-10 justify-center p-4'>
              <div className='flex items-end justify-evenly w-full'>
                <label htmlFor="" className='text-white text-4xl w-full'>Sign up</label>

                <h4 className='w-[4vw] text-white inline-block hover:cursor-pointer' onClick={() => setisSignIn(true)}>Sign In</h4>
              </div>

              {formDetails.map((item, index) => (
                <>
                  <div className='relative w-full'>
                    <label htmlFor="" className='m-0 p-0 absolute left-0 top-[-20px] text-zinc-300 text-sm'>{item.title}</label>
                    <input key={index} type={item.type} name={item.title} className='w-full h-[1.2vw] bg-transparent p-4 rounded-sm border-b-[1px] border-zinc-100 focus:outline-none focus:border-red-500' />
                  </div>
                </>
              ))}
              <button type='submit' className='items-center p-2 w-full bg-red-500 text-white hover:scale-[1.09]'>Sign Up</button>
            </form>
          }
        </div>

      </header>
    </div>
  )
}

export default Login