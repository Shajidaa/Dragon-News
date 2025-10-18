import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginWith = () => {
  return (
    <div>
      {" "}
      <h1 className="text-xl  font-semibold">Login With</h1>
      <button className="btn bg-white  text-secondary border-0 mt-5  w-full">
        {" "}
        <FcGoogle /> Login With Google
      </button>
      <button className="btn bg-white  text-blue-400 border-0 mt-5  w-full">
        {" "}
        <FaGithub /> Login With GitHub
      </button>
    </div>
  );
};

export default LoginWith;
