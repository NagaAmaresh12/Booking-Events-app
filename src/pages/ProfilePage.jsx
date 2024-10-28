import React, { useCallback, useContext, useRef, useState } from 'react'
import { IoMdContact } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { dataContext } from '../context/Context';
import { FaHistory } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import PopUp from '../components/PopUp';
import UpdateProfile from '../components/UpdateProfile.jsx';
import InputFields from '../components/InputFields.jsx';
import { formContext } from '../context/InputContext.jsx';

const ProfilePage = () => {
  const [data, setData] = useContext(dataContext);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [updateProfile, setupdateProfile] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const fileInputRef = useRef(null);
  const [logOut, setlogOut] = useState(false);
  const [logOutConfirm, setlogOutConfirm] = useState(false);
  const [userData, setUserData] = useContext(formContext);
  const [activeLink, setActiveLink] = useState("edit_profile");
  const components = [<IoMdContact key="contact" />, <CiViewList key="saving" />, <FaHistory key="booking" />, <CiViewList key="viewlist" />, <MdDeleteOutline key="delete" />];
  console.log(userData);

  const handleBtnClick = useCallback(() => {
    fileInputRef.current.click();
  }, []);

  const handleOptions = useCallback((link) => {
    setActiveLink(link);
  }, []);

  const handleFileChange = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setData(imageUrl);
      setUserData((prev) => ({ ...prev, image: imageUrl }));
    }
  }, [setData]);


  return (

    <>
      <section className='relative h-screen w-full bg-zinc-200 blur-0 flex items-start justify-start pl-10 overflow-hidden '>
        <section className='h-full w-[20%] relative'>
          <ul className='h-full w-full px-10 text-black text-lg pt-[6vw]'>
            <li className='text-2xl font-semibold py-4 block'>My Account</li></ul>
          {["profile", "my_events", "booking_history", "saved_events"].map((item, index) => (
            <Link key={index} to={`/${item}`} onClick={()=>(handleOptions({ item }))} className={` w-full bg-zinc-200 cursor-pointer hover:scale-105 hover:bg-cyan-500 duration-75  transition-all flex items-center justify-start px-4 text-lg ${activeLink == { item } ? "opacity-100" : "opacity-80"} font-medium py-2 my-2 rounded-sm gap-4`}><span>{components[index]}
            </span><span>Edit
                {item}
              </span>
            </Link>
          ))}


          <button onClick={() => setDeleteAccount(true)} className=' w-full bg-zinc-200 cursor-pointer hover:scale-105 hover:bg-cyan-500 duration-75 transition-all flex items-center justify-start px-4 text-lg font-medium py-2 my-2 rounded-sm gap-4'><span className='text-red-500 opacity-80'><MdDeleteOutline /></span><span>Delete Account</span></button>
        </section>

        <section className='h-full w-[70%] px-10  py-12 pl-20'>
          <h4 className='text-black text-lg font-semibold'>Profile</h4>
          <section className='h-[15vh] w-full flex gap-5 items-center'>
            <article className='h-[100px] w-[100px]  rounded-full bg-blue-600 flex overflow-hidden'>
              <img className='h-full w-full object-cover outline-none border-none' src={userData.image} alt="" />
            </article>
            <article>
              <h4 className='text-lg font-medium text-black'>{userData.fullname}</h4>
              <h4 className='text-md font-normal text-zinc-600'>harekrshna@123.com</h4>
            </article>
            <aside onClick={() => setupdateProfile(true)} className='absolute right-[20vw] top-[17vh] opacity-80 cursor-pointer '>Edit<CiEdit /></aside>
          </section>
          <h4 className='text-black text-lg font-semibold my-5'>Personal Information</h4>

          {/* input Information */}
          {[{label1: "fullName",label2:"Email"},{label1: "contact",label2:"age"},{label1: "city",label2:"country"}].map((item,index)=>(<InputFields key={index} filedName1={item.label1} filedName2={item.label2}/>))}


          <button onClick={() => setlogOut(true)} className='absolute right-52 bottom-28 px-5 py-2 outline-none border-none  flex gap-2 items-center text-white opacity-80 bg-red-600 rounded-sm overflow-hidden'>Logout<FaLongArrowAltRight /></button>
        </section>


        {/* logout */}

        {logOut &&
          <PopUp question={'Are you sure you want to LOGOUT?'} setFunc={setlogOut} setConfirm={setlogOutConfirm} />
        }
        {/* deleteAccount */}
        {deleteAccount &&
          <PopUp question={"ARE YOU SURE ? DO YOU WANT TO DELETE ACCOUNT"} setFunc={setDeleteAccount} setConfirm={setDeleteConfirm} />}
        {/* update profile */}

        {updateProfile && <UpdateProfile  handleBtnClick={handleBtnClick} fileInputRef={fileInputRef} 
        handleFileChange={handleFileChange} setupdateProfile={setupdateProfile}/>}

      </section>
    </>
  )
}

export default ProfilePage