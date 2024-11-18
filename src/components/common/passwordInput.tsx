import { useState } from "react";

// assets
import lockedIcon from "../../assets/locked_icon.svg";
import unlockedIcon from "../../assets/unlocked_icon.svg";

export interface PasswordProps {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  password: string;
}

export interface RepeatPasswordProps {
  setRepeatPassword?: React.Dispatch<React.SetStateAction<string>>;
  repeatPassword?: string;
}

type CombinedProps = PasswordProps & RepeatPasswordProps;

const UsernameInput: React.FC<CombinedProps> = ({
  setPassword,
  password,
  setRepeatPassword,
  repeatPassword,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="custom-password" className="pl-2">
        Password
      </label>
      <div className="relative">
        <img
          className="absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer p-2"
          src={showPassword ? unlockedIcon : lockedIcon}
          onClick={handleTogglePassword}
          alt="Lock icon"
          draggable="false"
        ></img>
        <input
          autoComplete="off"
          className="px-5 py-3 pl-10 w-full border-b-2
                       dark:bg-gray-800"
          id="custom-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>
      {repeatPassword !== undefined && setRepeatPassword !== undefined ? (
        <div className="relative">
          <img
            className="absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer p-2"
            src={showPassword ? unlockedIcon : lockedIcon}
            alt="Lock icon"
            draggable="false"
            onClick={handleTogglePassword}
          ></img>
          <input
            autoComplete="off"
            className="px-5 py-3 pl-10 w-full border-b-2
                       dark:bg-gray-800"
            id="repeatPassword"
            type={showPassword ? "text" : "password"}
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder="Repeat your password"
            required
          />
        </div>
      ) : (
        <button
          type="button"
          className="text-gray-500 ml-auto w-max hover:text-gray-700"
        >
          Forgot password?
        </button>
      )}
    </div>
  );
};

export default UsernameInput;
