import { useState } from "react";

export interface SubmitButtonProps {
  message: string;
  isSubmitButtonAnimated: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  message,
  isSubmitButtonAnimated,
}) => {
  const [isRotatingCircle, setRotatingCircle] = useState<boolean>(false);

  if (isSubmitButtonAnimated) {
    setTimeout(() => {
      setRotatingCircle(isSubmitButtonAnimated);
      console.log(isRotatingCircle);
    }, 100);
  }

  return (
    <div className="w-full flex justify-center items-center flex-col relative">
      <div
        className={
          "z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full px-3 py-2 transition-all duration-300 bg-green-400 border-8 border-green-400 " +
          (isSubmitButtonAnimated
            ? "w-10 h-10  rounded-full bg-transparent"
            : " w-full bg-green-400")
        }
      >
        <div
          className={
            isRotatingCircle && isSubmitButtonAnimated
              ? "opacity-100"
              : "opacity-0"
          }
        >
          <div className="z-20 absolute bg-white w-2 h-10 left-2 -top-2 animate-spinBorder dark:bg-gray-800"></div>
          <div className="z-30 absolute bg-green-400 w-3 h-3 left-[6px] top-[6px] rounded-full"></div>
        </div>
      </div>
      <button type="submit" className={"px-3 py-2 z-40 w-full"}>
        <span
          className={
            "text-white z-40 transition delay-75 " +
            (isSubmitButtonAnimated ? "opacity-0" : "opacity-100")
          }
        >
          {message}
        </span>
      </button>
    </div>
  );
};

export default SubmitButton;
