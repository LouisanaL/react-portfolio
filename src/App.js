import React, { useState } from "react";

import Navbar from "./components/NavBar/NavBar";
import Header from "./components/header";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Popup from "./components/popup";

function App() {
  const [popupData, setPopupData] = useState({
    title: "",
    desc: "",
    open: false,
  });

  const showDetails = (title, desc) => {
    setPopupData({ title, desc, open: true });
  };

  const closePopup = () => {
    setPopupData({ ...popupData, open: false });
  };

  return (
    <div className="App">
      <Navbar />
      <Header />

      <section id="projects" className="section">
        <h2>My Projects</h2>

        <Projects showDetails={showDetails} />
      </section>
      <div style={{ marginTop: "70px" }}>
        <Contact />
      </div>

      {popupData.open && (
        <Popup
          title={popupData.title}
          desc={popupData.desc}
          closePopup={closePopup}
        />
      )}
    </div>
  );
}

export default App;
