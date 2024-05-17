import React from "react";
import { Outlet } from "react-router-dom";
import Novbar from "../components/Novbar";

function MainLayout() {
  return (
    <>
      <Novbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
