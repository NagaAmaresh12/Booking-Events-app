import React, { useState } from 'react';
import OAuthButton from '../components/OAuthButton';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignInPage = () => {

  const [formData, setFormData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const getData = (data) => {
    setFormData({ email: data.email, password: data.password });

    
    console.log("Submitted Data:", data);
    console.log("Form Data State:", { email: data.email, password: data.password });

    // Optionally reset the form after submission
    reset();
    
    // Call API to sign in user
  };

  const enableSignUp = () => {};

  return (
    <section className='relative max-h-screen max-w-[100vw] overflow-hidden'>
      <section className='h-screen w-full flex items-center justify-center inset-0 backdrop-blur-3xl bg-black bg-opacity-10 overflow-hidden'>
        <section className='h-[60%] w-[35%] rounded px-10'>
          <article>
            <h1 className='text-black text-4xl my-2'>Sign In</h1>
            <p className='text-black text-sm'>
              New User? <Link to='/signup' onClick={enableSignUp} className='text-blue-400'>Create an account</Link>
            </p>
          </article>

          {/* Form */}
          <form onSubmit={handleSubmit(getData)} className='w-full py-10 flex flex-col gap-5'>
            <input
              {...register('email', { required: 'Email is required' })}
              type="text"
              autoComplete='on'
              placeholder='Email'
              className='p-2 outline-none bg-transparent border-b-[1px] border-zinc-900'
            />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}

            <input
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 5, message: 'Password must be at least 5 characters' },
                maxLength: { value: 20, message: 'Password cannot exceed 20 characters' }
              })}
              type="password"
              autoComplete='on'
              placeholder='Password'
              className='p-2 outline-none bg-transparent border-b-[1px] border-zinc-900'
            />
            {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}

            <button type='submit' className='w-full bg-blue-600 text-white p-2 rounded'>Submit</button>
          </form>

          <OAuthButton />
        </section>
      </section>

      <aside className='absolute -left-[4vw] -top-[4vw] -z-20 h-[22vw] w-[22vw] rounded-full bg-pink-600'></aside>
      <aside className='circle absolute -right-[4vw] -bottom-[4vw] -z-20 h-[22vw] w-[22vw] rounded-full bg-cyan-600'></aside>
    </section>
  );
};

export default SignInPage;
