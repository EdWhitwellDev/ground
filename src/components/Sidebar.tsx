import React from 'react';
import {useNavigate} from 'react-router-dom';
const MenuItem = (title: string, icon: string, url: string) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${url}`);
  };

  return (
    <div className="menu-item" onClick={handleClick}>
      <img className='icon' src={`/images/icons/${icon}.png`} alt={icon} />
      <p className="sidebar-option-title">{title}</p>
    </div>
  );
}

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="/images/icons/rover.png" alt="logo" width="100%" />
      <div className='sidebar-menu'>
        {MenuItem('Stereo Left', 'left', '')}
        {MenuItem('Stereo Right', 'right', 'right')}
        {MenuItem('Engineering', 'eng_cam', 'eng_cam')}
        {MenuItem('Model', 'model', 'model')}
      </div>
    </div>
  );
};

export default Sidebar;