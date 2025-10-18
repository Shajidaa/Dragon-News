import { NavLink } from "react-router";
import user from "../../assets/user.png";
const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-between items-center">
      <div></div>
      <div className="*:ml-2 text-lg text-base-300">
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Career</NavLink>
      </div>
      <div>
        <button className="flex gap-2 ">
          {" "}
          <img src={user} alt="" />{" "}
          <p className=" border-0  btn text-xl font-semibold text-white  ">
            Login
          </p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
