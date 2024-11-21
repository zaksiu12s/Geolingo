import { useState } from "react";

// importing helpers
import { usernameRegex, emailRegex } from "../../helpers/regex";
import AuthProps from "../../types/AuthProps";

// importing assets
import geolingoLogo from "../../assets/geolingo_logo.png";

// importing components
import Loading from "../common/loader";
import EmailInput from "../common/emailInput";
import UsernameInput from "../common/usernameInput";
import PasswordInput from "../common/passwordInput";
import SubmitButton from "../common/submitButton";
import SignUpUsing from "../common/signUpUsing";
import ChangeSignInForm from "../common/changeSignInForm";
import InputErrorElement from "../common/inputErrorElement";
import GeolingoSignInFormLogo from "../common/geolingoSignInFormLogo";

const Register: React.FC<AuthProps> = ({
  setIsRegistering,
  setUsername,
  username,
  setIsLoggedIn,
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const [canChangeAnimation, setCanChangeAnimation] = useState<boolean>(true);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    setEmail(email.trim());
    setUsername(username.trim());
    setPassword(password.trim());
    setRepeatPassword(repeatPassword.trim());

    console.log(email);
    if (!email) {
      setErrorMessage("Enter email");
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email address");
      return;
    }

    if (!username) {
      setErrorMessage("Enter username");
      return;
    }

    if (username.length > 15) {
      setErrorMessage("Username must be at least 15 characters");
      return;
    }

    if (username.length < 3) {
      setErrorMessage("Username must be at least 3 characters");
      return;
    }

    if (!usernameRegex.test(username)) {
      setErrorMessage(
        "Invalid username, only letters, numbers, _ and - are allowed"
      );
      return;
    }

    if (!password) {
      setErrorMessage("Enter password");
      return;
    }

    if (password !== repeatPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (canChangeAnimation) {
      setCanChangeAnimation(false);
      handleSubmitAnimation();
    }
    setTimeout(() => {
      setCanChangeAnimation(true);
      console.log("Logging in with:", { username, password });
      setIsLoggedIn(true);
      setIsRegistering(false);

      localStorage.setItem("username", username);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("email", email);
      localStorage.setItem("isRegistering", "false");
    }, 2000);
  };

  const [isSubmitButtonAnimated, setIsSubmitButtonAnimated] =
    useState<boolean>(false);

  const handleSubmitAnimation = () => {
    setIsSubmitButtonAnimated(!isSubmitButtonAnimated);
  };

  const handleSetRegistration = () => {
    setIsRegistering(false);
    localStorage.setItem("isRegistering", "false");
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white flex justify-center min-h-screen items-center text-black font-open-sans">
      {!isLoaded ? (
        <div className="text-center">
          <img
            draggable="false"
            className="hidden"
            src={geolingoLogo}
            onLoad={handleImageLoad}
            alt=""
          ></img>
          <Loading />
        </div>
      ) : (
        <div
          className="p-3 sm:border-4 sm:border-green-300 sm:rounded-3xl sm:p-10
          dark:bg-gray-900"
        >
          {/* <div className="p-3 sm:bg-green-100 sm:rounded-3xl sm:p-10"> */}
          <GeolingoSignInFormLogo />
          <h2 className="text-center text-4xl font-bold">Register</h2>
          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            autoComplete="off"
          >
            <EmailInput setEmail={setEmail} email={email} />
            <UsernameInput setUsername={setUsername} username={username} />
            <PasswordInput
              setPassword={setPassword}
              setRepeatPassword={setRepeatPassword}
              password={password}
              repeatPassword={repeatPassword}
            />
            <SubmitButton
              message="Register"
              isSubmitButtonAnimated={isSubmitButtonAnimated}
            />

            <InputErrorElement errorMessage={errorMessage} />
          </form>

          <SignUpUsing />
          <ChangeSignInForm
            setIsRegistering={handleSetRegistration}
            type="signup"
          />
        </div>
      )}
    </div>
  );
};

export default Register;
