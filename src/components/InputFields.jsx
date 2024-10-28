import React, { useContext } from 'react'
import { formContext } from '../context/InputContext'

const InputFields = ({label1,label2}) => {
    const  [userData, setUserData] = useContext(formContext) ;
    return (
        <section className='h-[15vh] w-full  flex gap-32 px-10 '>
            <div>
                <label htmlFor="">{label1}</label>
                <input onChange={(e) => setUserData({ ...userData, [label1]: e.target.value })} value={userData.label1} className='bg-zinc-400 p-2 block w-[15vw] outline-none focus:outline-none rounded-sm my-2' type="text" />
            </div>
            <div>
                <label htmlFor="">{label2}</label>
                <input onChange={(e) => setUserData({ ...userData, [label2]: e.target.value })} value={userData.label2} className='bg-zinc-400 p-2 block w-[15vw] outline-none focus:outline-none rounded-sm my-2' type="text" />
            </div>

        </section>
    )
}

export default InputFields