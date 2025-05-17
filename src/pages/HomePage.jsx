
import { useLocation } from "react-router-dom";

function HomePage() {

  const {state} = useLocation();

  return (
    <div>
      <h1>Home Page</h1>
      <p>{state?.login}</p>
    </div>
  );
}

export default HomePage;
