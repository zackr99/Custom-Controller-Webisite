import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import title from './images/ecb.jpg'

// Sidebar component for the App
function Sidebar() {

return(
    <div className="sidebar">
      <div className ="title_container">
          <img className ="sidebar_title" src={title} alt ="Logo"/>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
)
}
export default Sidebar