import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function Home() {
  const [homeClick, setHomeClick] = useState(0);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-200">
      {homeClick ? (
        <Signup homeClick={homeClick} setHomeClick={setHomeClick} />
      ) : (
        <Login homeClick={homeClick} setHomeClick={setHomeClick} />
      )}
    </div>
  );
}

export default Home;
