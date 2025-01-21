import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Navbar />
    </>
  );
};

export default Layout;
