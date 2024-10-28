import React, { useContext } from 'react'
import { formContext } from '../context/InputContext'
import { MdDriveFolderUpload } from 'react-icons/md';

const UpdateProfile = ({handleBtnClick,fileInputRef,handleFileChange,setupdateProfile}) => {
    const [userData,setUserData]=useContext(formContext);
    return (
        <section className='h-[40vh] w-[40vw] absolute left-1/2 top-1/2 bg-zinc-900 -translate-x-1/2 -translate-y-1/2 rounded-md flex flex-col justify-center items-center gap-5'>
            <div className='flex flex-col items-center justify-center gap-5 h-[10vh] w-1/2'>

                <button onClick={handleBtnClick} className='h-[60px] w-[60px] absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-[20%] bg-transparent border-[1px] border-zinc-400 rounded-full flex items-center text-zinc-400 text-3xl
            justify-center'><MdDriveFolderUpload /></button>

                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ width:'0',
                        height:'0'
                    }}
                    onChange={handleFileChange}
                />

                <h4 className='text-xl font-semibold absolute left-1/2 top-3 text-zinc-400 -translate-x-1/2 '>Update image</h4>
            </div>
            <section className='text-zinc-400 w-full flex items-center justify-center gap-10'>
                <div>̥
                    <label htmlFor="">Full Name</label>
                    <input value={userData.fullname} onChange={(e) => setUserData({ ...userData, fullname: e.target.value })} className='bg-zinc-400 p-2 block w-[15vw] outline-none focus:outline-none text-black rounded-sm my-2' type="text" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} className='bg-zinc-400 p-2 block w-[15vw] outline-none text-black focus:outline-none rounded-sm my-2' type="email" />
                </div>
            </section>
            <button onClick={() => setupdateProfile(false)} className='px-10 py-3 bg-transparent border-[1px] border-zinc-400 rounded-full text-zinc-400 cursor-pointer font-light'>Done &nbsp;!</button>
        </section>
    )
}

export default UpdateProfile