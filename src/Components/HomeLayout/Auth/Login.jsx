import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const { logIn, setUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password).then((res) => setUser(res.user));
  };
  return (
    <div
      className="card bg-base-100 mx-auto
      w-full max-w-sm shrink-0 
     shadow-2xl mt-10"
    >
      <div className="card-body">
        <h1>Login your account</h1>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
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
              Login
            </button>

            <p className="text-lg font-medium">
              Dont’t Have An Account ?{" "}
              <Link
                className="text-blue-400 hover:text-blue-900"
                to={"/auth/register"}
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
