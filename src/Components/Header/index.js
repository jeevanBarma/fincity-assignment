import { useNavigate } from "react-router";
import "./index.css";
const Header = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div>
        <h1 onClick={() => navigate("/")}>Jeevan Barma</h1>
      </div>
      <ul>
        <li onClick={() => navigate("/")}>About</li>
        <li onClick={() => navigate("/project")}>Projects</li>
        <li onClick={() => navigate("/contact")}>contact</li>
      </ul>
    </nav>
  );
};
export default Header;
