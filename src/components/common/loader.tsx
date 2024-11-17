const Loader = () => {
  return (
    <div className="z-100  h-[100svh] w-full flex justify-center items-center align-center">
      <div className="relative px-3 py-2 border-8 border-green-400 w-10 h-10 rounded-full bg-transparent">
        <div>
          <div className="absolute bg-white w-2 h-10 left-2 -top-2 animate-spinBorder"></div>
          <div className="absolute bg-green-400 w-3 h-3 left-[6px] top-[6px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
