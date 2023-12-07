import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SidebarCard from './SidebarCard';

const SideBar = () => {

  return (
    <div className='sidebar'>
      <div className='menu'>
        <Link to='/' className='menu-list'>
          <SidebarCard title={"Name Form"} description={"Start creating a new form with the wide options of fields available"}/>
        </Link>
      </div>
      <div className='explore'>Explore the following Templates:</div>
      <div className='menu'>
        <NavLink to='/' className='menu-list'>
          <SidebarCard title={"Details Collection"} description={"Collect information from Candidates on their eductaion, work experience, contct no, etc"}/>
        </NavLink>
      </div>
      <div className='menu'>
        <NavLink to='/documents' className='menu-list'>
          <SidebarCard title={"Document Collection"} description={"Save time and efforts: Explore this template to find a set of questions required for document collection"}/>
        </NavLink>
      </div>
      <div className='menu'>
        <NavLink to='/statement' className='menu-list'>
          <SidebarCard title={"Statement of Purpose"} description={"Start creating a new form with the wide options of fields availabe"}/>
        </NavLink>
      </div>
      <div className='menu'>
        <NavLink to='/interview' className='menu-list'>
          <SidebarCard title={"Interview Availability"} description={"Start creating a new form with the wide options of fields available"}/>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar
