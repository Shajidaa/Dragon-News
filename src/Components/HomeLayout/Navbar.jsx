import { Link } from "react-router";
import userImage from "../../assets/user.png";
import { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="w-11/12 mx-auto flex justify-between items-center">
      <div></div>

      <div className="*:ml-2 text-lg text-base-300">
        <Link to={"/"}>Home</Link>
        <Link>About</Link>
        <Link>Career</Link>
      </div>

      <div>
        <button className="flex gap-2 ">
          {" "}
          <img
            className="w-12 rounded-full"
            src={`${user ? user.photoURL : userImage}`}
            alt=""
          />{" "}
          {user ? (
            <p
              onClick={handleLogout}
              className=" border-0  btn text-xl font-semibold text-white  "
            >
              Log Out
            </p>
          ) : (
            <Link
              to={"/auth/login"}
              className=" border-0  btn text-xl font-semibold text-white  "
            >
              Login
            </Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
