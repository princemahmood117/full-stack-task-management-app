import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-306px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
