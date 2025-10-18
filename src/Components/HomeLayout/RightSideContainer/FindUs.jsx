import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      {" "}
      <h1 className="text-xl  my-5 font-semibold">Find us on</h1>
      <div className="join  join-vertical w-full  ">
        <button className="btn bg-white justify-start join-item">
          <CiFacebook /> Facebook
        </button>
        <button className="btn  bg-white justify-start join-item">
          <FaInstagram></FaInstagram>Instagram
        </button>
        <button className="btn  bg-white justify-start join-item">
          <FaTwitter></FaTwitter> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
