import Header from "../components/Header"
import { Outlet } from "react-router-dom"

export const MainLayout: React.FC= () =>{
  return (
    <div className="dark:bg-black">
      <Header/>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}