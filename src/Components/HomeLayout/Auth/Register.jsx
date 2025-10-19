import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, user, updateUser } = use(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value;
    const photo = form.photo.value;
    // const photo = form.photo.files[0];
    console.log({ name });

    const email = form.email.value;
    const password = form.password.value;
    // createUser(email, password)
    //   .then((res) => setUser(res.user))
    //   .catch((error) => console.log(error.message));
    try {
      const res = await createUser(email, password);
      const user = res.user;

      updateUser({ displayName: name, photoURL: photo })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          navigate("/");
        })
        .catch((error) => console.log(error.message));
    } catch (err) {
      setError(err.message);
    }
  };
  console.log(user);

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
              required
            />
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Enter Your Photo"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
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
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Register;
