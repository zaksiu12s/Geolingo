import { useEffect, useState } from "react";

import Register from "./components/layout/register";
import Login from "./components/layout/login";
import UserSettings from "./components/layout/userSettings";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const browserDarkMode = localStorage.getItem("darkMode");

    if (browserDarkMode == "true") {
      setDarkMode(true);
    }

    const isBrowserRegistering = localStorage.getItem("isRegistering");
    const isBrowserLoggedIn = localStorage.getItem("isLoggedIn");
    const browserUsername = localStorage.getItem("username");

    if (
      isBrowserLoggedIn == "true" &&
      browserUsername &&
      browserUsername.length >= 3
    ) {
      localStorage.removeItem("isRegistering");

      setIsRegistering(false);
      setIsLoggedIn(true);
      setUsername(browserUsername);
    } else {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");

      if (isBrowserRegistering == "true") {
        setIsRegistering(true);
      } else {
        setIsRegistering(false);
        localStorage.removeItem("isRegistering");
      }
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("darkMode");
    }
  }, [darkMode]);

  return (
    <>
      {isLoggedIn ? (
        <UserSettings
          userData={{ username }}
          setIsLoggedIn={setIsLoggedIn}
          setIsRegistering={setIsRegistering}
          setUserData={{ setUsername: setUsername }}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
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
