import React, { useState } from "react";
import geolingoLogo from "./assets/geolingo_logo.png";
import userIcon from "./assets/user_icon.svg";
import lockedIcon from "./assets/locked_icon.svg";
import unlockedIcon from "./assets/unlocked_icon.svg";
import facebookLogo from "./assets/facebook_logo.svg";
import googleLogo from "./assets/google_logo.svg";
import appleLogo from "./assets/apple_logo.svg";
import geolingoLogoShadow from "./assets/geolingo_logo_shadow.png";

interface AuthProps {
  setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  username: string;
}

const Register: React.FC<AuthProps> = ({
  setIsRegistering,
  setUsername,
  username,
}) => {
  localStorage.setItem("isRegistering", "true");

  const [isLoaded, setIsLoaded] = useState(false);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const startLogin = () => {
    setIsRegistering(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center min-h-screen items-center text-black font-open-sans">
      {!isLoaded ? (
        <div className="text-center">
          <img
            draggable="false"
            className="hidden"
            src={geolingoLogo}
            onLoad={handleImageLoad}
            alt=""
          ></img>
          <p className="text-gray-500 animate-pulse">Loading...</p>
        </div>
      ) : (
        <div className="p-3 sm:border-4 sm:border-green-300 sm:rounded-3xl sm:p-10">
          {/* <div className="p-3 sm:bg-green-100 sm:rounded-3xl sm:p-10"> */}
          <div className="relative">
            <img
              draggable="false"
              className="p-3 sm:p-0 w-96 max-w-full absolute"
              src={geolingoLogoShadow}
              alt="Geolingo logo"
            ></img>
            <img
              draggable="false"
              className="p-3 sm:p-0 w-96 max-w-full animate-fade-down animate-once animate-duration-400 animate-ease-in-out"
              src={geolingoLogo}
              alt="Geolingo logo"
            ></img>
          </div>
          <h2 className="text-center text-4xl font-bold">Register</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            autoComplete="off"
          >
            <div className="flex flex-col">
              <label htmlFor="custom-email" className="pl-2">
                Email
              </label>
              <div className="relative">
                <img
                  className="absolute top-1/2 -translate-y-1/2 left-2 pointer-events-none"
                  src={lockedIcon}
                  alt="Lock icon"
                  draggable="false"
                ></img>
                <input
                  autoComplete="off"
                  className="px-5 py-3 pl-10 w-full border-b-2"
                  id="custom-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="custom-username" className="pl-2">
                Username
              </label>
              <div className="relative">
                <img
                  className="absolute top-1/2 left-2 -translate-y-1/2 pointer-events-none"
                  src={userIcon}
                  alt="User icon"
                  draggable="false"
                ></img>
                <input
                  autoComplete="off"
                  className="px-5 py-3 pl-10 w-full border-b-2"
                  id="custom-username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="custom-password" className="pl-2">
                Password
              </label>
              <div className="relative">
                <img
                  className="absolute top-1/2 -translate-y-1/2 left-2 cursor-pointer"
                  src={showPassword ? unlockedIcon : lockedIcon}
                  onClick={handleTogglePassword}
                  alt="Lock icon"
                  draggable="false"
                ></img>
                <input
                  autoComplete="off"
                  className="px-5 py-3 pl-10 w-full border-b-2"
                  id="custom-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="relative">
                <img
                  className="absolute top-1/2 -translate-y-1/2 left-2 cursor-pointer"
                  src={showPassword ? unlockedIcon : lockedIcon}
                  alt="Lock icon"
                  draggable="false"
                  onClick={handleTogglePassword}
                ></img>
                <input
                  autoComplete="off"
                  className="px-5 py-3 pl-10 w-full border-b-2"
                  id="repeatPassword"
                  type={showPassword ? "text" : "password"}
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  placeholder="Repeat your password"
                  required
                />
              </div>
            </div>

            <button type="submit" className="bg-green-400 px-3 py-2 text-white">
              Register
            </button>
          </form>
          <p className="text-gray-500 text-center mt-10 mb-3">
            Or Sign Up using
          </p>
          <div className="flex justify-center gap-1">
            <button type="button" className="w-10 h-10">
              <img
                draggable="false"
                className="w-10"
                src={facebookLogo}
                alt="Facebook logo"
              ></img>
            </button>
            <button className="border-2 rounded-full w-10 h-10" type="button">
              <img
                draggable="false"
                className="w-10"
                src={googleLogo}
                alt="Facebook logo"
              ></img>
            </button>
            <button
              className="border-2 rounded-full flex justify-center w-10 h-10"
              type="button"
            >
              <img
                draggable="false"
                className="w-8 h-8"
                src={appleLogo}
                alt="Facebook logo"
              ></img>
            </button>
          </div>

          <p className="text-gray-500 text-center mt-20 mb-1">
            Or Log In using
          </p>
          <div className="flex justify-center">
            <button type="button" className="" onClick={startLogin}>
              LOG IN
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Login: React.FC<AuthProps> = ({
  setIsRegistering,
  setUsername,
  username,
}) => {
  localStorage.setItem("isRegistering", "false");

  const [isLoaded, setIsLoaded] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const turnRegistration = () => {
    setIsRegistering(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center min-h-screen items-center text-black font-open-sans">
      {!isLoaded ? (
        <div className="text-center">
          <img
            className="hidden"
            src={geolingoLogo}
            draggable="false"
            onLoad={handleImageLoad}
            alt=""
          ></img>
          <p className="text-gray-500 animate-pulse">Loading...</p>
        </div>
      ) : (
        <div className="p-3 sm:border-4 sm:border-green-300 sm:rounded-3xl sm:p-10">
          {/* <div className="p-3 sm:bg-green-100 sm:rounded-3xl sm:p-10"> */}
          <div className="relative">
            <img
              className="p-3 sm:p-0 w-96 max-w-full absolute"
              src={geolingoLogoShadow}
              draggable="false"
              alt="Geolingo logo"
            ></img>
            <img
              className="p-3 sm:p-0 w-96 max-w-full animate-fade-down animate-once animate-duration-400 animate-ease-in-out"
              src={geolingoLogo}
              draggable="false"
              alt="Geolingo logo"
            ></img>
          </div>
          <h2 className="text-center text-4xl font-bold">Login</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            autoComplete="off"
          >
            <div className="flex flex-col">
              <label htmlFor="custom-username" className="pl-2">
                Username
              </label>
              <div className="relative">
                <img
                  className="absolute top-1/2 left-2 -translate-y-1/2 pointer-events-none"
                  src={userIcon}
                  alt="User icon"
                  draggable="false"
                ></img>
                <input
                  autoComplete="off"
                  className="px-5 py-3 pl-10 w-full border-b-2"
                  id="custom-username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="custom-password" className="pl-2">
                Password
              </label>
              <div className="relative">
                <img
                  className="absolute top-1/2 -translate-y-full left-2 cursor-pointer"
                  src={showPassword ? unlockedIcon : lockedIcon}
                  alt="Lock icon"
                  draggable="false"
                  onClick={handleTogglePassword}
                ></img>
                <input
                  autoComplete="off"
                  className="px-5 py-3 pl-10 w-full border-b-2"
                  id="custom-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="text-gray-500 float-right w-max clear-both
                hover:text-gray-700"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <button type="submit" className="bg-green-400 px-3 py-2 text-white">
              Login
            </button>
          </form>
          <p className="text-gray-500 text-center mt-10 mb-3">
            Or Sign Up using
          </p>
          <div className="flex justify-center gap-1">
            <button type="button" className="w-10 h-10">
              <img
                draggable="false"
                className="w-10"
                src={facebookLogo}
                alt="Facebook logo"
              ></img>
            </button>
            <button className="border-2 rounded-full w-10 h-10" type="button">
              <img
                draggable="false"
                className="w-10"
                src={googleLogo}
                alt="Facebook logo"
              ></img>
            </button>
            <button
              className="border-2 rounded-full flex justify-center w-10 h-10"
              type="button"
            >
              <img
                draggable="false"
                className="w-8 h-8"
                src={appleLogo}
                alt="Facebook logo"
              ></img>
            </button>
          </div>

          <p className="text-gray-500 text-center mt-20 mb-1">
            Or Sign Up using
          </p>
          <div className="flex justify-center">
            <button type="button" onClick={turnRegistration}>
              SIGN UP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  const isBrowserRegistering = localStorage.getItem("isRegistering");

  const [isRegistering, setIsRegistering] = useState(
    isBrowserRegistering == "true"
  );
  const [username, setUsername] = useState("");

  return (
    <>
      {isRegistering ? (
        <Register
          setIsRegistering={setIsRegistering}
          setUsername={setUsername}
          username={username}
        />
      ) : (
        <Login
          setIsRegistering={setIsRegistering}
          setUsername={setUsername}
          username={username}
        />
      )}
    </>
  );
}

export default App;
