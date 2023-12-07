import React from 'react'
import { useNavigate } from 'react-router-dom';
import NameOfForm from './NameOfForm';
import SideBar from './SideBar';
import { MdOutlineAttachment } from "react-icons/md";

const Documents = () => {
    const navigate = useNavigate();
  
  return (
    <>
    <div className='detail-wrapper'>
      <SideBar/>
    <div className='form-wrapper'>
      <NameOfForm/>
      <div className='inputs-wrapper'>
      <div className='input-div'>
        <div>1.10th Marksheet*</div>
        <label htmlFor='tenth' className='label'>
          <MdOutlineAttachment />
          <span>Attach file upto 5kb</span>
        </label>
        <input type='file' id='tenth' className='hide'/>
      </div>
      <div className='input-div'>
        <div>2.12th Marksheet*</div>
        <label htmlFor='twelevth' className='label'>
        <MdOutlineAttachment />
        <span>Attach file upto 5kb</span>
          </label>
        <input type='file' id='twelevth' className='hide'/>
      </div>
      <div className='input-div'>
        <div>3.Graduation Marksheet*</div>
        <label htmlFor='grad' className='label'>
        <MdOutlineAttachment />
        <span>Attach file upto 5kb</span>
        </label>
        <input type='file' id='grad' className='hide'/>
      </div>
      <div className='input-div'>
        <div>4.Post Graduation Marksheet</div>
        <label htmlFor='post-graduation' className='label'>
        <MdOutlineAttachment />
        <span>Attach file upto 5kb</span>
        </label>
        <input type='file' id='post-graduation' className='hide'/>
      </div>
      <div className='input-div'>
        <div>5.Offer Letter*</div>
        <label htmlFor='offer' className='label'>
        <MdOutlineAttachment />
        <span>Attach file upto 5kb</span>
        </label>
        <input type='file' id='offer' className='hide'/>
      </div>
      <div className='input-div'>
        <div>6.Salary Slips*</div>
        <label htmlFor='salary' className='label'>
        <MdOutlineAttachment />
        <span>Attach file upto 5kb</span>
        </label>
        <input type='file' id='salary' className='hide'/>
      </div>
      <div className='input-div'>
        <div>7.Bank Statement*</div>
        <label htmlFor='bank' className='label'>
        <MdOutlineAttachment />
        <span>Attach file upto 5kb</span>
        </label>
        <input type='file' id='bank' className='hide'/>
      </div>
      <div className='input-div'>
        <div>8.Increment Letter(if any)</div>
        <label htmlFor='increment' className='label'>
        <MdOutlineAttachment />
        <span>Attach file upto 5kb</span>
        </label>
        <input type='file' id='increment' className='hide'/>
      </div>
      <div className='input-div'>
        <div>9.Others(if any)</div>
        <label htmlFor='others' className='label'>
        <MdOutlineAttachment />
        <span>Attach file upto 5kb</span>
        </label>
        <input type='file' id='others' className='hide'/>
      </div>
      </div>
    </div>
    </div>
    <footer className='footer'>
      <button onClick={() => navigate('/statement')}>NEXT</button>
    </footer>
    </>
  )
}

export default Documents
