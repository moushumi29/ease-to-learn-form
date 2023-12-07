import React from 'react'

const SidebarCard = (props) => {
    const { title, description } = props;
  return (
    <div className='sidebar-wrapper'>
            <div className='empty-box'></div>
            <div className='content'>
              <div className='title'>{title}</div>
              <div className='description'>{description}</div>
            </div>
    </div>
  )
}

export default SidebarCard
