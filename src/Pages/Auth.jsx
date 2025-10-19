import React from "react";
import Header from "../Components/HomeLayout/Header";
import { Outlet } from "react-router";
import Navbar from "../Components/HomeLayout/Navbar";

const Auth = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Auth;
