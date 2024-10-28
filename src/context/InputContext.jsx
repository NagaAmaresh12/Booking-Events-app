import React, { Children, createContext, useState } from 'react'

export const formContext = createContext();
const InputContext = ({children}) => {

    const [userData, setUserData] = useState({ image: "", fullname: "", email: "", contact: "", age: "", city: "", country: "" });
  return (
    <formContext.Provider value={[userData,setUserData]}>
        {Children}
    </formContext.Provider>
  )
}

export default InputContext;