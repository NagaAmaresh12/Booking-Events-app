import React, { useState } from 'react';
import OAuthButton from '../components/OAuthButton';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import { useForm } from 'react-hook-form';

const SignUpPage = () => {
  const [nextBtn, setnextBtn] = useState(0);
  const [signUpFormData, setsignUpFormData] = useState({});
  const {register,handleSubmit,reset}=useForm();

  const handleNext = () => {
    setnextBtn((prev) => prev + 1);
    console.log("clicked", nextBtn);

  }
  const handleArrow = () => {
    if (nextBtn > 0) {
      setnextBtn((next) => next - 1);
    }
    console.log("clicked", nextBtn);
  }
  const onSubmit = (data) =>{
    setsignUpFormData({...signUpFormData,fullName:data.fullName,number:data.number,email:data.email,password:data.password});
    console.log("submitted", data);
    reset();
  }
  const enableSignUp = () => { };
  return (
    <section className='relative max-h-screen max-w-[100vw] overflow-hidden'>
      <section className='h-screen w-full flex items-center justify-center inset-0 backdrop-blur-3xl bg-black bg-opacity-10 overflow-hidden'>
        <section className='h-[60%] w-[35%] rounded px-10'>
          <article>
            <h1 className=' text-black text-4xl my-2'>Sign Up</h1>
            <p className='text-black text-sm inline-block '>Already have an account?  <Link to='/signup' onClick={enableSignUp} className='text-blue-400 pl-3'>Sign in</Link > </p>
          </article>
          <section className='h-[40px] w-full relative  my-5 flex items-center justify-center gap-2'>
            <span className='block h-[0.5px] w-full bg-zinc-950'></span>

            <span className={`h-[20px] w-[20px] rounded-full absolute left-0 top-1/2 -translate-y-1/2  ${nextBtn === 0 ? "bg-blue-600 border-none" : "bg-white border-[1px] border-zinc-700 "} flex items-center justify-center`}>
              <span className={`h-[7px] w-[7px] rounded-full ${nextBtn === 0 ? "bg-white" : "bg-zinc-800"}`}></span>
            </span>
            <span className={`h-[20px] w-[20px] rounded-full absolute left-1/2 top-1/2 -translate-y-1/2  ${nextBtn === 1 ? "bg-blue-600 border-none" : "bg-white border-[1px] border-zinc-700 "} flex items-center justify-center`}>
              <span className={`h-[7px] w-[7px] rounded-full ${nextBtn === 1 ? "bg-white" : "bg-zinc-800"}`}></span>
            </span>
            <span className={`h-[20px] w-[20px] rounded-full absolute left-[99%] top-1/2 -translate-y-1/2  ${nextBtn === 2 ? "bg-blue-600 border-none" : "bg-white border-[1px] border-zinc-700 "} flex items-center justify-center`}>
              <span className={`h-[7px] w-[7px] rounded-full ${nextBtn === 2 ? "bg-white" : "bg-zinc-800"}`}></span>
            </span>

          </section>

          {/* first form */}

          <section className='relative h-[35vh] w-full border-[1px] border-zinc-900 overflow-hidden p-4 my-4' >
          {nextBtn > 0 && signUpFormData.fullName && signUpFormData.number && <span className='arrow absolute left-4 top-6 z-20 cursor-pointer !cursor-pointer bg-cyan-400' onClick={handleArrow}><FiArrowLeft /></span>}

            <form  className={` absolute left-0 top-0 -translate-x-[${nextBtn * 100}%]  duration-100 z-10 flex items-center justify-start gap-[20%] px-10   flex-shrink-0 flex-nowrap h-full w-full`} action="" method='POST' onSubmit={handleSubmit(onSubmit)} >

              {/* form1 */}
              <section className='w-full py-10 flex flex-col gap-5'>
                <input type="text" placeholder='Full Name' {...register('fullName')} onChange={(e)=>setsignUpFormData({...signUpFormData,fullName:e.target.value})} maxLength={20} minLength={5} required autoComplete='on' className='min-w-[25vw] p-2 outline-none focus:outline-none bg-transparent border-b-[1px] border-zinc-900' />
                <input type='text' placeholder='Number' onChange={(e)=>setsignUpFormData({...signUpFormData,number:e.target.value})} {...register('number')} maxLength={10} minLength={10}  required autoComplete='on' className='p-2 outline-none focus:outline-none  bg-transparent border-b-[1px] border-zinc-900 ' />
                <button className='w-full bg-blue-600 text-white p-2 outline-none focus:outline-none rounded cursor-pointer' onClick={handleNext}
                >Next</button>
              </section>

              {/* form 2 */}
              <section   className=' min-w-[25vw] w-full py-10 flex flex-col gap-5' >
                <input type="text" placeholder='Email' {...register('email')} required autoComplete='on' className='p-2 outline-none focus:outline-none bg-transparent border-b-[1px] border-zinc-900' />
                <input type="password" placeholder='Password'{...register('password')}  maxLength={15} minLength={4}   required autoComplete='on' className='p-2 outline-none focus:outline-none  bg-transparent border-b-[1px] border-zinc-900 ' />
                <button className='w-full bg-blue-600 text-white p-2 outline-none focus:outline-none rounded' onClick={handleNext}>Submit</button>
              </section>

              {/* form 3 */}
              <section className=' min-w-[25vw] w-full py-10 flex flex-col gap-5' >
                <span className='block h-[0.5px] w-full bg-zinc-950'></span>

                <Link to="/" className='w-full bg-blue-600 text-white p-2 outline-none focus:outline-none rounded flex items-center justify-center' >Start</Link>
              </section>
            </form>
          </section>

          <OAuthButton />
        </section>
      </section>
      <aside className='absolute -left-[4vw] -top-[4vw] -z-20 h-[22vw] w-[22vw] rounded-full bg-pink-600'>
      </aside>
      <aside className='circle absolute -right-[4vw] -bottom-[4vw] -z-20 h-[22vw] w-[22vw] rounded-full bg-cyan-600'>
      </aside>
    </section>
  )
}

export default SignUpPage;