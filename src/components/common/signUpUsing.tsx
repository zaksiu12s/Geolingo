import facebookLogo from "../../assets/facebook_logo.svg";
import googleLogo from "../../assets/google_logo.svg";
import appleLogo from "../../assets/apple_logo.svg";

export interface SignUpUsingProps {
  message?: string;
}

const SignUpUsing: React.FC<SignUpUsingProps> = ({ message = "Sign Up" }) => {
  return (
    <>
      <div>
        <p className="text-gray-500 text-center mt-10 mb-3">
          Or {message} using
        </p>
        <div className="flex justify-center gap-1">
          <button type="button" className="w-10 h-10">
            <img
              width="40px"
              height="40px"
              draggable="false"
              className="w-10 h-10"
              src={facebookLogo}
              alt="Facebook logo"
            ></img>
          </button>
          <button className="border-2 rounded-full w-10 h-10" type="button">
            <img
              width="40px"
              height="40px"
              draggable="false"
              className="w-10 h-10"
              src={googleLogo}
              alt="Facebook logo"
            ></img>
          </button>
          <button
            className="border-2 rounded-full flex justify-center w-10 h-10"
            type="button"
          >
            <img
              width="32px"
              height="32px"
              draggable="false"
              className="w-8 h-8"
              src={appleLogo}
              alt="Facebook logo"
            ></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpUsing;
