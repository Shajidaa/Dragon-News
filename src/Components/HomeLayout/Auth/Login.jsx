import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const { logIn, setUser, resetPassword } = use(AuthContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;

    const password = form.password.value;

    // logIn(email, password)
    //   .then(
    //     (res) => setUser(res.user),
    //     navigate(`${location.state ? location.state : "/"}`)
    //   )
    //   .catch((error) => {
    //     setError(error.message);
    //   });
    try {
      const res = await logIn(email, password);
      setUser(res.user);
      navigate(location.state ? location.state : "/");
    } catch (err) {
      setError(err.message);
    }
  };
  // const handleResetPassword = () => {
  //   const emailInput = document.querySelector('input[name="email"]');
  //   const email = emailInput?.value;

  //   if (!email) {
  //     alert("Please enter your email first!");
  //     return;
  //   }

  //   resetPassword(email)
  //     .then(() => {
  //       alert("Password reset email sent! Check your inbox.");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };
  const handleResetPassword = async () => {
    if (!email) {
      return alert("please enter your email first!");
    }
    try {
      await resetPassword(email);
      alert("Password reset email sent!");
    } catch (error) {
      alert(error.message);
    }
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Enter Your Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter Your Password"
              required
            />
            <a
              onClick={handleResetPassword}
              className="link link-hover cursor-pointer"
            >
              Forgot password?
            </a>

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

            <p className="text-lg font-medium">
              Don’t Have An Account ?{" "}
              <Link
                className="text-blue-400 hover:text-blue-900"
                to={"/auth/register"}
              >
                Register
              </Link>
            </p>
          </fieldset>
          {error && <p className="text-red-500 font-medium">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
