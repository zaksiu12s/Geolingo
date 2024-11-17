import { useState } from "react";

// importing helpers
import AuthProps from "../../types/AuthProps";

// importing assets
import geolingoLogo from "../../assets/geolingo_logo.png";

// importing components
import Loading from "../common/loader";
import UsernameInput from "../common/usernameInput";
import PasswordInput from "../common/passwordInput";
import SubmitButton from "../common/submitButton";
import SignUpUsing from "../common/signUpUsing";
import ChangeSignInForm from "../common/changeSignInForm";
import InputErrorElement from "../common/inputErrorElement";
import GeolingoSignInFormLogo from "../common/geolingoSignInFormLogo";

const Login: React.FC<AuthProps> = ({
  setIsRegistering,
  setUsername,
  username,
  setIsLoggedIn,
}) => {
  localStorage.setItem("isRegistering", "false");

  const [isLoaded, setIsLoaded] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const [canChangeAnimation, setCanChangeAnimation] = useState(true);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    setUsername(username.trim());
    setPassword(password.trim());

    if (username == "") {
      setErrorMessage("Enter username");
      return;
    }

    if (password == "") {
      setErrorMessage("Enter password");
      return;
    }

    if (canChangeAnimation) {
      setCanChangeAnimation(false);
      handleSubmitAnimation();
    }
    // SERVER REQUEST IN FUTURE
    setTimeout(() => {
      setCanChangeAnimation(true);
      console.log("Logging in with:", { username, password });

      setIsLoggedIn(true);
      localStorage.setItem("username", username);
      localStorage.setItem("isLoggedIn", "true");
    }, 1000);
  };

  const [isSubmitButtonAnimated, setIsSubmitButtonAnimated] = useState(false);

  const handleSubmitAnimation = () => {
    console.log("toggling");
    setIsSubmitButtonAnimated(!isSubmitButtonAnimated);
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
          <Loading />
        </div>
      ) : (
        <div className="p-3 sm:border-4 sm:border-green-300 sm:rounded-3xl sm:p-10">
          <GeolingoSignInFormLogo />
          <h2 className="text-center text-4xl font-bold">Login</h2>
          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            autoComplete="off"
          >
            <UsernameInput setUsername={setUsername} username={username} />
            <PasswordInput setPassword={setPassword} password={password} />
            <SubmitButton
              message="Login"
              isSubmitButtonAnimated={isSubmitButtonAnimated}
            />

            <InputErrorElement errorMessage={errorMessage} />
          </form>
          <SignUpUsing />

          <ChangeSignInForm setIsRegistering={setIsRegistering} type="login" />
        </div>
      )}
    </div>
  );
};

export default Login;
