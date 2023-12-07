import React, { createContext, useState } from 'react'
import App from './App';

export const stepCountContext = createContext();

const StepContext = () => {
    const [userData, setUserData] = useState({
      first: "",
      conatctNo: "",
      dateofBirth: "",
      email: "",
      loaction: "",
      time: "",
      date: "",
    });
  return (
    <div>
      <stepCountContext.Provider value=
      {{ userData, setUserData }}>
        <App/>
      </stepCountContext.Provider>
    </div>
  )
}

export default StepContext
