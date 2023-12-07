import React from 'react'
import { useNavigate } from 'react-router-dom';
import NameOfForm from './NameOfForm';
import SideBar from './SideBar';

const StatementPage = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='detail-wrapper'>
      <SideBar/>
    <div className='form-wrapper'>
      <NameOfForm/>
      <div className='inputs-wrapper'>
      <div className='input-div'>
        <label>1.Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?</label>
        <textarea placeholder='Enter a description for long answer'></textarea>
        <div className='right-text'>300 word limit</div>
      </div>
      <div className='input-div'>
        <label>2.Tell me about the last time something significant didn't go according to plan at work. What was your role? What was the outcome?</label>
        <textarea placeholder='Enter a description for long answer'></textarea>
        <div className='right-text'>300 word limit</div>
      </div>
      <div className='input-div'>
        <label>3.What are the three things that are most important to you in a job?</label>
        <textarea placeholder='Enter a description for long answer'></textarea>
        <div className='right-text'>300 word limit</div>
      </div>
      </div>
    </div>
    </div>
    <footer className='footer'>
    <button onClick={() => navigate('/interview')}>NEXT</button>
  </footer>
  </>
  )
}

export default StatementPage
