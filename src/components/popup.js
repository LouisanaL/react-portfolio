import React from "react";
import "./popup.css"; 

function Popup({ title, desc, closePopup }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-btn" onClick={closePopup}>&times;</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Popup;
