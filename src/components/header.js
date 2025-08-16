import React from "react";
import './header.css';

function Header() {
  return (
    <div className="profile-section"  id="aboutme">
      <div className="profile-text">
        <h1>Louisana Andrea Lube</h1>
        <p>I am a Computer Science student at De La Salle Lipa. While programming isn’t my strongest skill, I enjoy working on creative projects such as photo and video editing, presentation design, and UI/UX design using Figma. I’m passionate about combining creativity and technology to communicate ideas effectively.</p>
      </div>

      <div className="profile-photo">
        <img src="/pp eya.jpg" alt="Andrea Lube" />
      </div>
    </div>
  );
}

export default Header;
