import React, { useContext } from 'react'
import { stepCountContext } from '../StepContext';
import { useNavigate } from 'react-router-dom';
import NameOfForm from './NameOfForm';
import SideBar from './SideBar';

const Details = () => {
  const { userData, setUserData } = useContext(stepCountContext);
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value })
  }
  return (
    <>
      <div className='detail-wrapper'>
        <SideBar />
        <div className='form-wrapper'>
          <NameOfForm />
          <div className='inputs-wrapper'>
            <div className='input-div'>
              <label>1.Name* </label>
              <input type='text' name='first' placeholder='Enter your name' required onChange={handleOnChange} />
            </div>
            <div className='input-div'>
              <label>2.Email </label>
              <input type='email' placeholder='Example - userid@gamil.com' required  name='email' onChange={handleOnChange}/>
            </div>
            <div className='input-div'>
              <label>3.Date of Birth </label>
              <input type='date' name='dateofBirth' placeholder='DD/MM/YY' onChange={handleOnChange}/>
            </div>
            <div className='input-div'>
              <label>4.Contact no </label>
              <input type='number' name='conatctNo' placeholder='Enter your 10 digit conatct no' onChange={handleOnChange}/>
            </div>
          </div>

        </div>

      </div>
      <footer className='footer'>
        <button onClick={() => navigate('/documents')}>NEXT</button>
      </footer>
    </>
  )
}

export default Details
