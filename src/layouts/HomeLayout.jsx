import Header from "../Components/HomeLayout/Header";
import Latest from "../Components/HomeLayout/Latest";
import Navbar from "../Components/HomeLayout/Navbar";

const HomeLayout = () => {
  return (
    <>
      <header>
        <Header></Header>
        <Latest></Latest>
        <Navbar></Navbar>
      </header>
    </>
  );
};

export default HomeLayout;
