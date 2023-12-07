import React, { useContext } from 'react'
import { stepCountContext } from '../StepContext';
import { useNavigate } from 'react-router-dom';
import NameOfForm from './NameOfForm';
import SideBar from './SideBar';
import { toast } from 'react-toastify';

const InterviewAvailability = () => {
    const { userData, setUserData } = useContext(stepCountContext);
    const navigate = useNavigate();
    let timeZone = Intl.supportedValuesOf('timeZone');
    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value })
    }
    const handleSubmit = () => {
      toast.success("Form Submitted Succesfully",
      {
        theme: "light",
      });
      navigate('/')
    }
  return (
    <>
    <div className='detail-wrapper'>
      <SideBar/>
      <div className='form-wrapper'>
      <NameOfForm/>
      <div className='inputs-wrapper'>
      <div className='input-div'>
        <label>1.Email*</label>
        <input type='email' required name='email' onChange={handleOnChange}/>
      </div>
      <div className='input-div'>
        <label>2.Location</label>
        <input type='text' name='location' onChange={handleOnChange} />
      </div>
      <div className='input-div'>
        <label>3.Interview Date</label>
        <input type='date' name='date' onChange={handleOnChange}/>
      </div>
      <div className='input-div'>
        <label>4.Interview Time</label>
        <input type='time' name='time' onChange={handleOnChange}/>
      </div>
      <div className='input-div'>
        <label>5.Time Zone</label>
        <select>
                <option disabled></option>
                {timeZone.map((time, i)=> {
                    return <option key={i}>{time}</option>
                })}
        </select>
      </div>
      <div className='input-div'>
        <label>6.Interview Medium</label>
        <select>
          <option disabled></option>
          <option>Online</option>
          <option disabled></option>
          <option>Offline</option>
        </select>
      </div>
      </div>
      </div>
    </div>
    <footer className='footer'>
    <button onClick={handleSubmit}>SUBMIT</button>
  </footer>
  </>
  )
}

export default InterviewAvailability
