import { Outlet } from "react-router-dom";
import { NavBar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const MainLayout: React.FC = () =>{
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer/>
    </>
  )
}