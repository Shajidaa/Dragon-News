import { Outlet } from "react-router";
import Category from "../Components/HomeLayout/Category";
import Header from "../Components/HomeLayout/Header";
import Latest from "../Components/HomeLayout/Latest";

import Navbar from "../Components/HomeLayout/Navbar";
import LoginWith from "../Components/HomeLayout/RightSideContainer/LoginWith";
import FindUs from "../Components/HomeLayout/RightSideContainer/FindUs";
import QJon from "../Components/HomeLayout/RightSideContainer/QJon";

import bgImg from "../assets/bg.png";
const HomeLayout = () => {
  return (
    <>
      <header>
        <Header></Header>
        <Latest></Latest>
        <Navbar></Navbar>
      </header>
      <div className="max-w-11/12 mx-auto grid md:grid-cols-12 grid-cols-1 gap-5 mt-5">
        <aside className="col-span-3 ">
          {" "}
          <Category></Category>
        </aside>
        <main className="col-span-6">
          <Outlet></Outlet>
        </main>
        <aside className="col-span-3">
          <LoginWith></LoginWith>
          <FindUs></FindUs>
          <QJon></QJon>
          <div className="flex justify-center items-center my-5">
            <img src={bgImg} alt="" />
          </div>
        </aside>
      </div>
    </>
  );
};

export default HomeLayout;
