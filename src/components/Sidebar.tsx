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
        <div className="menu-item" style={{background:"red", height:"70px", display:"flex", justifyContent:"center"}} onClick={() => window.location.reload()}>
          <p className="sidebar-option-title" style={{color:"white"}}>STOP</p>
        </div>
        {MenuItem('Main Cam', 'main_cam', '')}
        {MenuItem('Stereo', 'eye', 'stereo')}
        {MenuItem('Model', 'model', 'model')}
        {MenuItem('Controls', 'manual', 'manual')}
      </div>
    </div>
  );
};

export default Sidebar;