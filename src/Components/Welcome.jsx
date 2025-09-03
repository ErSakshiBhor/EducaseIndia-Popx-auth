import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="center-form">
      <div className="welcome-box">
        <h2 className="welcome-title">Welcome to PopX</h2>
        <p className="welcome-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button
          onClick={() => navigate("/register")}
          className="btn-primary"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="btn-secondary"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;
