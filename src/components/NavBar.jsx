import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../utils/Button'
import ProfileButton from '../utils/ProfileButton'
const NavBar = ({route}) => {
    
    return (
        <header className='h-[60px] w-full fixed left-0 top-0 z-[10] py-10 px-24 text-lg text-black  '>
            <nav className='relative h-full w-full flex items-center justify-between'>
                {/* Logo Image */}
                {/* <img src={"logo"} alt="Logo" className="navbar-logo h-full w-full object-cover" /> */}
                <h1 className='text-black text-xl font-semibold'>Buzzly</h1>
                {/* Navigation Links */}
                <ul className="navbar-links w-[30%] flex items-center justify-center gap-20">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/event'>Event</Link></li>
                    <li>{route == "signin" || route=="signup" ?<Button data={route}/>:<ProfileButton/>}</li>
                </ul>
            </nav>
            
        </header>
    )
}

export default NavBar