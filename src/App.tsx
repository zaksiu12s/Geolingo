import { useState } from "react";

import Register from "./components/layout/register";
import Login from "./components/layout/login";
import UserSettings from "./components/layout/userSettings";

function App() {
  const isBrowserRegistering = localStorage.getItem("isRegistering");
  const isBrowserLoggedIn = localStorage.getItem("isLoggedIn");
  const browserUsername = localStorage.getItem("username");

  const [isLoggedIn, setIsLoggedIn] = useState(
    isBrowserLoggedIn == "true" &&
      browserUsername != null &&
      browserUsername.length > 0
  );
  const [isRegistering, setIsRegistering] = useState(
    isBrowserRegistering == "true"
  );
  const [username, setUsername] = useState(browserUsername || "");

  return (
    <>
      {isLoggedIn ? (
        <UserSettings username={username} setIsLoggedIn={setIsLoggedIn} />
      ) : isRegistering ? (
        <Register
          setIsRegistering={setIsRegistering}
          setUsername={setUsername}
          username={username}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <Login
          setIsRegistering={setIsRegistering}
          setUsername={setUsername}
          username={username}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
}

export default App;
