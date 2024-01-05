import React, { useContext } from "react";
import { Context } from "../../Context/addContext";
import ProjectCard from "../ProjectCard";
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import Header from "../Header";

import "./index.css";

const Project = () => {
  const { state } = useContext(Context);

  return (
    <>
      <Header />
      {console.log(state)}
      <div className="project-container">
        <h1 className="project-heading">Projects</h1>
        <ul className="ul">
          {state &&
            state.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </ul>
        <div className="icon-name-container">
          <div className="icon-container">
            <RiInstagramFill size={40} />
            <FaLinkedin size={40} />
            <IoIosMail size={40} />
          </div>
          <p className="end-p">Copyright © 2024. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Project;
