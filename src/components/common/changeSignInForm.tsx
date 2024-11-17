export interface ChangeSingInFormProps {
  setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
  type: "login" | "signup";
}

const ChangeSignInForm: React.FC<ChangeSingInFormProps> = ({
  setIsRegistering,
  type,
}) => {
  const turnRegistration = () => {
    if (type === "login") {
      setIsRegistering(true);
    }
    if (type === "signup") {
      setIsRegistering(false);
    }
  };

  return (
    <>
      <div>
        <p className="text-gray-500 text-center mt-20 mb-1">
          {type === "login" ? "Or Sign Up using" : "Or Log In using"}
        </p>
        <div className="flex justify-center">
          <button type="button" onClick={turnRegistration}>
            {type === "login" ? "SIGN UP" : "Log In"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangeSignInForm;
