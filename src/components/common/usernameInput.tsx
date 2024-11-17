import userIcon from "../../assets/user_icon.svg";

export interface UsernameProps {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  username: string;
}

const UsernameInput: React.FC<UsernameProps> = ({ username, setUsername }) => {
  return (
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
          className="px-5 py-3 pl-10 w-full border-b-2
                       dark:bg-gray-800"
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
  );
};

export default UsernameInput;