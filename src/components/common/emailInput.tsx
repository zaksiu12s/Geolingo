import lockedIcon from "../../assets/locked_icon.svg";

export interface EmailProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  required?: boolean;
}

const EmailInput: React.FC<EmailProps> = ({
  email,
  setEmail,
  required = false,
}) => {
  return (
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
          className="px-5 py-3 pl-10 w-full border-b-2
                    dark:bg-gray-800"
          id="custom-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required={required}
        />
      </div>
    </div>
  );
};

export default EmailInput;
