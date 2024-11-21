import { useState } from "react";

// importing helpers
import UserProps from "../../types/UserProps";

// importing assets
import PasswordInput from "../common/passwordInput";
import EmailInput from "../common/emailInput";
import UsernameInput from "../common/usernameInput";
import SubmitButton from "../common/submitButton";
import SettingsTab from "../common/settingsTab";
import InputErrorElement from "../common/inputErrorElement";

const UserSettings: React.FC<UserProps> = ({
  userData,
  setIsLoggedIn,
  setIsRegistering,
  setUserData,
  setDarkMode,
  darkMode,
}) => {
  const [activeTab, setActiveTab] = useState<string>("User");
  const [activeTabAnimate, setActiveTabAnimate] = useState<boolean>(false);
  const [inputUsername, setInputUsername] = useState<string>(userData.username);

  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [isButtonAnimated, setIsButtonAnimated] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  setTimeout(() => {
    setActiveTabAnimate(true);
  }, 10);

  const handleActiveTab = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    setActiveTabAnimate(false);

    setActiveTab(target.id);
    setTimeout(() => {
      setActiveTabAnimate(true);
    }, 10);
  };

  const userInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (userData.username == inputUsername) {
      setErrorMessage("Username cannot be changed");
      return;
    }

    setIsButtonAnimated(true);
    setTimeout(() => {
      localStorage.setItem("username", inputUsername);
      setUserData.setUsername(inputUsername);

      setIsButtonAnimated(false);
    }, 3500);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isRegistering");
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    setIsRegistering(false);
    setUserData.setUsername("");
    setIsLoggedIn(false);
  };

  return (
    <>
      <div
        className="font-open-sans p-1 min-h-[100svh] overflow-x-hidden
      dark:bg-gray-800 dark:text-white"
      >
        <h1 className="text-2xl">
          Hi <span className="font-bold">{userData.username}</span>!
        </h1>
        <div
          className="mx-1 flex flex-row text-center items-center relative
           before:content-[''] before:w-full before:h-[2px] before:absolute before:bg-gray-300 before:bottom-0 before:left-0 before:z-0"
        >
          <SettingsTab
            message="User"
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
          <SettingsTab
            message="Integrations"
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
          <SettingsTab
            message="Security"
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
        </div>
        {activeTab == "User" ? (
          <div
            className={
              "transition origin-top-left duration-300 ease-[cubic-bezier(0.68,0.0,0.27,1.1)] " +
              (activeTabAnimate
                ? "flex flex-col p-3 relative scale-100"
                : "flex flex-col p-3 relative scale-0")
            }
          >
            <div className="flex items-center justify-start gap-2 p-2 pb-3">
              <div className="bg-green-500 w-[4.5rem] h-[4.5rem] rounded-full flex justify-center items-center text-white text-3xl font-bold">
                <div className="w-full text-center">
                  {(userData.username.replace(/\d/g, "").length < 5
                    ? userData.username.replace(/\d/g, "")[0] +
                      userData.username.replace(/\d/g, "")[
                        userData.username.replace(/\d/g, "").length - 1
                      ]
                    : userData.username.replace(/\d/g, "")[0] +
                      userData.username.replace(/\d/g, "")[
                        Number(
                          (
                            userData.username.replace(/\d/g, "").length / 2
                          ).toFixed(0)
                        )
                      ] +
                      userData.username.replace(/\d/g, "")[
                        userData.username.replace(/\d/g, "").length - 1
                      ]
                  ).toUpperCase()}
                </div>
              </div>
              <div className="flex flex-col">
                <div>{userData.username}</div>
                <div className="text-gray-500 text-sm -mt-1">User</div>
              </div>
            </div>

            <form className="flex flex-col gap-5" onSubmit={userInfoSubmit}>
              <UsernameInput
                setUsername={setInputUsername}
                required={false}
                username={inputUsername}
              />

              <EmailInput setEmail={setEmail} email={email} required={false} />

              <PasswordInput
                setPassword={setPassword}
                password={password}
                setRepeatPassword={setRepeatPassword}
                repeatPassword={repeatPassword}
              />

              <SubmitButton
                message="Save"
                isSubmitButtonAnimated={isButtonAnimated}
              />
              <InputErrorElement errorMessage={errorMessage} />
            </form>
          </div>
        ) : (
          ""
        )}

        {activeTab == "Integrations" ? (
          <div
            className={
              "transition duration-300 ease-[cubic-bezier(0.68,0.0,0.27,1.1)] origin-top " +
              (activeTabAnimate ? "scale-100" : "scale-0")
            }
          >
            <div>
              <span className="text-3xl font-bold text-red-400 flex justify-center gap-3 items-center sm:justify-start">
                EXPERIMENTAL
                <svg
                  className="w-8"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" x2="12.01" y1="17" y2="17" />
                </svg>
              </span>
              <span className="font-bold">Dark mode:</span>{" "}
              <input
                className="cursor-pointer"
                type="checkbox"
                onClick={() => setDarkMode(!darkMode)}
                checked={darkMode}
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {activeTab == "Security" ? (
          <div
            className={
              "transition duration-300 ease-[cubic-bezier(0.68,0.0,0.27,1.1)] origin-top-right " +
              (activeTabAnimate ? "scale-100" : "scale-0")
            }
          >
            <div
              className="bg-red-500 text-white font-bold w-max py-2 px-3 mx-5 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default UserSettings;
