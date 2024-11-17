const InputErrorElement: React.FC<{ errorMessage: string }> = ({
  errorMessage,
}) => {
  return (
    <p className="text-red-500 max-w-96 self-start -mt-5">{errorMessage}</p>
  );
};

export default InputErrorElement;
