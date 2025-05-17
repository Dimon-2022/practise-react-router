import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/", { state: { login: "You are not logged in" } });
  }

  return (
    <div>
      Login Page
      <Link to={"/"} state={{ login: "You are logged in" }}>
        <button>Log in</button>
      </Link>
      <button onClick={navigateToHome}>Forgot login data</button>
    </div>
  );
}

export default LoginPage;
