import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import Header from "../Header";
import { Context } from "../../Context/addContext";
import "./index.css";
const Home = () => {
  const navigate = useNavigate();
  const { addproject } = useContext(Context);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (title && link && description) {
      addproject(title, link, description);
      console.log(title, link, description);
      setTitle("");
      setLink("");
      setDescription("");
    } else {
      alert("Fill all inputs");
    }
  };

  return (
    <>
      <Header />
      <div className="main-conatiner">
        <div className="name-image-container">
          <div className="name-container">
            <h1 className="heading">
              <span className="h4">FrontEnd Developer</span>
              <br />
              Hello, my name is Jeevan Barma
            </h1>
            <p className="description">
              Enthusiastic Frontend Developer Proficient in HTML, CSS, and
              JavaScript. Dedicated to creating visually appealing and
              user-friendly websites. Eager to contribute innovative solutions
              to web development projects. Check out my portfolio for a showcase
              of my work!
            </p>
            <div className="btn-container">
              <button
                onClick={() => navigate("/project")}
                className="btn project-btn"
                type="button"
              >
                Projects
              </button>
              <button className="btn linkedin-btn" type="button">
                LinkedIn
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1704379967/imageHEllo_bs6rf1.png"
              alt="logo"
              className="img"
            />
          </div>
        </div>
        <div className="add-project-container">
          <h2 className="add-project-heading">Add Project</h2>
          <form className="form" onSubmit={SubmitHandler}>
            <div className="label-input-container">
              <label className="label">Project Name</label>
              <input
                className="input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="label-input-container">
              <label className="label">Project Link</label>
              <input
                className="input"
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="label-input-container">
              <label className="label">Project Description</label>
              <textarea
                className="input"
                rows={8}
                cols={50}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="btn-c">
              <button className="form-btn" type="submit">
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Home;
