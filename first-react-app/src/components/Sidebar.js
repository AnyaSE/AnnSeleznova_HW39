import '../App.css';
import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import Content from './Content';

function Sidebar() {
    const [selectedLink, setSelectedLink] = useState(null);
  
    const handleLinkClick = (link) => {
      setSelectedLink(link);
    };
  
    return (
      <div className='Sidebar'>
        <ul className='SidebarList'>
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className={`row ${selectedLink === val.link ? 'active' : ''}`}
                onClick={() => handleLinkClick(val.link)}
              >
                <div id='title'>{val.title}</div>
              </li>
            );
          })}
        </ul>
        {selectedLink !== null && <Content selectedLink={selectedLink} />}
      </div>
    );
  }
  
  export default Sidebar;
