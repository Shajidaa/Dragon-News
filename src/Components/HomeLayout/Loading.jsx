import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-dvh">
      <PulseLoader color="#0b0508" />
    </div>
  );
};

export default Loading;
