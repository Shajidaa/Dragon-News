import { format } from "date-fns";
import logo from "../../assets/logo.png";

const Header = () => {
  const date = format(new Date(), "EEEE");
  const month = format(new Date(), ", MMMM MM yyyy");
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="my-5" src={logo} alt="" />
      <p className="text-base-300 font-normal mb-2  text-xl">
        Journalism Without Fear or Favour
      </p>
      <p className="text-base-200 font-medium mb-2 text-xl">
        <span className="text-primary">{date}</span>
        {month}
      </p>
    </div>
  );
};

export default Header;
