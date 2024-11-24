import React , {useState} from 'react';
import {useNavigate } from 'react-router-dom'

function Services() {
  // initialize the navigator
  const navigate = useNavigate();
  
  // Function to navigate to Xbox Page
  const goToXboxPage = () =>{
    navigate('/Xbox');
  }
  // Function to navigate to the playstation page
  const goToPsPage =() =>{
    navigate('/Playstation');
  }
  return (
    <div>
      <h1>Customize Xbox Controller</h1>
      <p>Customizing an Xbox controller lets players bring their unique 
        personality and preferences to their gaming experience. With options to change colors, add custom decals, 
        and choose from various finishes, players can create a controller that looks as good as it feels. Enhanced features 
        like adjustable thumbsticks, remappable buttons, and trigger locks offer improved precision and comfort. Whether you’re
        aiming for a bold, personalized design or functional upgrades, a custom Xbox controller makes each gaming session more
        immersive and uniquely yours.</p>
        <div>
          <img id="xboxImg" src ="https://t3.ftcdn.net/jpg/04/76/25/36/360_F_476253630_IiSfFzRPPB5xF7qU1JRyNRZ1kYsJz4TG.jpg"/>
      </div>
      <button onClick={goToXboxPage}>Customize</button>
      <h1>Customize Playstation Controller</h1>
      <p>Customizing a PS5 controller offers players a way to express their style 
      while enhancing their gaming experience. With endless design options like vibrant colors, unique textures, 
      and themed decals, players can create a controller that stands out. Functional upgrades, including advanced 
      triggers, customizable thumbsticks, and remappable buttons, provide an edge in gameplay and tailored comfort.
      Whether you’re looking for aesthetic flair or performance boosts, a custom PS5 controller brings a personal 
      touch to every gaming session.</p>
      <div>
        <img id="psImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqD4z63wrtxejniVM61tdN-6LRyhegDJTFNA&s"/>
      </div>
      <button onClick={goToPsPage}>Customize</button>
    </div>
  );
}

export default Services;
