import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, user } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    // const name = form.name.value;

    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => setUser(res.user))
      .catch((error) => console.log(error.message));
  };

  return (
    <div
      className="card bg-base-100 mx-auto
      w-full max-w-sm shrink-0 
     shadow-2xl mt-10"
    >
      <div className="card-body">
        <h1>Register your account</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Your Name"
            />
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="email"
              name="Photo"
              className="input"
              placeholder="Enter Your Photo"
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter Your Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter Your Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            <p className="text-lg font-medium">
              Do you Have An Account ?{" "}
              <Link
                className="text-blue-400 hover:text-blue-900"
                to={"/auth/login"}
              >
                Login
              </Link>
            </p>
          </fieldset>
        </form>
        {user && <p>{user.email}</p>}
      </div>
    </div>
  );
};

export default Register;
