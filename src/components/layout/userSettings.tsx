import { useState } from "react";

// importing helpers
import UserProps from "../../types/UserProps";

// importing assets
import userIcon from "../../assets/user_icon.svg";
import lockedIcon from "../../assets/locked_icon.svg";

const UserSettings: React.FC<UserProps> = ({ username, setIsLoggedIn }) => {
  const [activeTab, setActiveTab] = useState("User");
  const [inputUsername, setInputUsername] = useState(username);

  const handleActiveTab = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    setActiveTab(target.id);
  };

  const userInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("isRegistering", "false");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="font-open-sans p-1">
        <h1 className="text-2xl">
          Hi <span className="font-bold">{username}</span>!
        </h1>
        <div
          className="mx-1 flex flex-row justify-around text-center items-center relative
           before:content-[''] before:w-full before:h-[2px] before:absolute before:bg-gray-300 before:bottom-0 before:left-0 before:z-0"
        >
          <div
            id="User"
            className={
              "z-10 w-full px-4 py-2 rounded-tl-lg rounded-tr-lg cursor-pointer  " +
              (activeTab == "User"
                ? "bg-green-500 text-white"
                : "text-gray-600")
            }
            onClick={handleActiveTab}
          >
            User
          </div>
          <div
            id="Integrations"
            className={
              "z-10 w-full px-4 py-2 rounded-tl-lg rounded-tr-lg cursor-pointer " +
              (activeTab == "Integrations"
                ? "bg-green-500 text-white"
                : "text-gray-600")
            }
            onClick={handleActiveTab}
          >
            Integrations
          </div>
          <div
            id="Security"
            className={
              "z-10 w-full px-4 py-2 rounded-tl-lg rounded-tr-lg cursor-pointer " +
              (activeTab == "Security"
                ? "bg-green-500 text-white"
                : "text-gray-600")
            }
            onClick={handleActiveTab}
          >
            Security
          </div>
        </div>
        {activeTab == "User" ? (
          <div className="flex flex-col p-3">
            <div className="flex items-center justify-start gap-2 p-2 pb-3">
              <div className="bg-green-500 w-16 h-16 rounded-full flex justify-center items-center text-white text-3xl font-bold">
                <div className="w-full text-center">ZK</div>
              </div>
              <div className="flex flex-col">
                <div>{username}</div>
                <div className="text-gray-500 text-sm -mt-1">User</div>
              </div>
            </div>

            <form className="flex flex-col gap-3" onSubmit={userInfoSubmit}>
              <div className="flex flex-col">
                <label htmlFor="username" className="font-bold">
                  Username
                </label>
                <div className="relative">
                  <img
                    className="absolute top-1/2 -translate-y-1/2 left-2 cursor-pointer"
                    src={userIcon}
                    alt="Lock icon"
                    draggable="false"
                  ></img>
                  <input
                    className="px-5 py-3 pl-10 w-full border-b-gray-300 border-b-2"
                    id="username"
                    name="username"
                    value={inputUsername}
                    onChange={(e) => setInputUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
                <div className="relative">
                  <img
                    className="absolute top-1/2 -translate-y-1/2 left-2 cursor-pointer"
                    src={userIcon}
                    alt="Lock icon"
                    draggable="false"
                  ></img>
                  <input
                    className="px-5 py-3 pl-10 w-full border-b-gray-300 border-b-2"
                    id="email"
                    name="email"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="font-bold">
                  New password
                </label>
                <div className="relative">
                  <img
                    className="absolute top-1/2 -translate-y-1/2 left-2 cursor-pointer"
                    src={lockedIcon}
                    alt="Lock icon"
                    draggable="false"
                  ></img>
                  <input
                    type="password"
                    className="px-5 py-3 pl-10 w-full border-b-gray-300 border-b-2"
                    id="password"
                    name="password"
                  />
                </div>
                <div className="relative">
                  <img
                    className="absolute top-1/2 -translate-y-1/2 left-2 cursor-pointer"
                    src={lockedIcon}
                    alt="Lock icon"
                    draggable="false"
                  ></img>
                  <input
                    type="password"
                    className="px-5 py-3 pl-10 w-full border-b-gray-300 border-b-2"
                    id="repeat-password"
                    name="repeat-password"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="text-white bg-green-300 py-2 px-3"
              >
                Save
              </button>
            </form>
          </div>
        ) : (
          ""
        )}

        {activeTab == "Integrations" ? (
          <div>
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
          <div>
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
