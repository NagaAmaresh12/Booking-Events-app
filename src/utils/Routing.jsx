import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ForgetPassword from '../pages/ForgetPassword';
import ProfilePage from '../pages/ProfilePage';


const Routing = () => {
  const route = "profile";

  return (
    <>
        <NavBar route={route}/>
        {/* Routing */}
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/signin' element={<SignInPage/>}/>   
            <Route path='/signup' element={<SignUpPage/>}/>   
            <Route path='/forget-password' element={<ForgetPassword/>}/>   
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/events' element={<ProfilePage/>}/>
            <Route path='*' element={<HomePage/>}/>

        </Routes>
        {route && route==="signin" || route=="signup" && route!== undefined ?(""):(<Footer/>)}
      
    </>
  )
}

export default Routing