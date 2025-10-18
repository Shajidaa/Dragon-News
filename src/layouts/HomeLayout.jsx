import { Outlet } from "react-router";
import Category from "../Components/HomeLayout/Category";
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
      <div className="w-11/12 mx-auto grid grid-cols-12 gap-5 mt-5">
        <aside className="col-span-3">
          {" "}
          <Category></Category>
        </aside>
        <main className="col-span-6">
          <Outlet></Outlet>
        </main>
        <aside className="col-span-3">right</aside>
      </div>
    </>
  );
};

export default HomeLayout;
