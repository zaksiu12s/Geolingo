import { useState } from "react";

// importing helpers
import UserProps from "../../types/UserProps";

// importing assets
import PasswordInput from "../common/passwordInput";
import EmailInput from "../common/emailInput";
import UsernameInput from "../common/usernameInput";
import SubmitButton from "../common/submitButton";
import SettingsTab from "../common/settingsTab";

const UserSettings: React.FC<UserProps> = ({
  userData,
  setIsLoggedIn,
  setIsRegistering,
  setUserData,
}) => {
  const [activeTab, setActiveTab] = useState<string>("User");
  const [activeTabAnimate, setActiveTabAnimate] = useState<boolean>(false);
  const [inputUsername, setInputUsername] = useState<string>(userData.username);

  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

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
      <div className="font-open-sans p-1">
        <h1 className="text-2xl">
          Hi <span className="font-bold">{userData.username}</span>!
        </h1>
        <div
          className="mx-1 flex flex-row justify-around text-center items-center relative
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
              <div className="bg-green-500 w-16 h-16 rounded-full flex justify-center items-center text-white text-3xl font-bold">
                <div className="w-full text-center">ZK</div>
              </div>
              <div className="flex flex-col">
                <div>{userData.username}</div>
                <div className="text-gray-500 text-sm -mt-1">User</div>
              </div>
            </div>

            <form className="flex flex-col gap-3" onSubmit={userInfoSubmit}>
              <UsernameInput
                setUsername={setInputUsername}
                username={inputUsername}
              />

              <EmailInput setEmail={setEmail} email={email} />

              <PasswordInput
                setPassword={setPassword}
                password={password}
                setRepeatPassword={setRepeatPassword}
                repeatPassword={repeatPassword}
              />

              <SubmitButton message="Save" isSubmitButtonAnimated={false} />
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
              BETA (POSSIBILITY OF NOT WORKING: )<br></br>
              <span className="font-bold">Dark mode:</span>{" "}
              <input type="checkbox" />
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
