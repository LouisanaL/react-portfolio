import React from "react";
import "../style.css";


const projects = [
  {
    img: process.env.PUBLIC_URL + "/images/pa.jpg",
    title: "Pet Adoption",
    shortDesc: "Group project",
    fullDesc:
      "Pet Adoption Tracker is a group project designed to help users find and track pets available for adoption. It allows users to view pet profiles, update adoption status, and manage adoption records efficiently, making the process easier for both shelters and potential pet owners.", 
  },
  {
    img: process.env.PUBLIC_URL + "/images/UI LT.jpg",
    title: "LipaTrax",
    shortDesc: "Group Project",
    fullDesc:
      " LipaTrax is a group project designed to help users navigate Lipa City efficiently. It tracks transportation routes, schedules, and traffic updates, making commuting easier and more convenient for everyone",
  },
  {
    img: process.env.PUBLIC_URL + "/images/mm1.jpg",
    title: "MoodMate",
    shortDesc: "Group Project",
    fullDesc:
      "MoodMate is a group project that provides users with a mental health companion. It offers free mental health consultations, tracks mood and well-being, and gives helpful advice on coping strategies and medication management.",
  },
];

const Projects = ({ showDetails }) => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <div className="card-content">
              <img
                src={proj.img}
                alt={proj.title}
                style={{
                  width: "300px",
                  maxHeight: "200px",
                  objectFit: "cover",
                }}
              />
              <h3>{proj.title}</h3>
              <p>{proj.shortDesc}</p>
            </div>
            <button
              className="learn-more"
              onClick={() => showDetails(proj.title, proj.fullDesc)}
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
