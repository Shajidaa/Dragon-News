import { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Provider/AuthProvider";

const LoginWith = () => {
  const { signInGoogle, signInGitHub } = use(AuthContext);
  const handleGoogleLogIn = () => {
    signInGoogle();
  };
  const handleGitHubLogIn = () => {
    signInGitHub();
  };
  return (
    <div>
      {" "}
      <h1 className="text-xl  font-semibold">Login With</h1>
      <button
        onClick={handleGoogleLogIn}
        className="btn bg-white  text-secondary border-0 mt-5  w-full"
      >
        {" "}
        <FcGoogle /> Login With Google
      </button>
      <button
        onClick={handleGitHubLogIn}
        className="btn bg-white  text-blue-400 border-0 mt-5  w-full"
      >
        {" "}
        <FaGithub /> Login With GitHub
      </button>
    </div>
  );
};

export default LoginWith;
