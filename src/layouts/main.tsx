import Header from "../components/Header"
import { Outlet } from "react-router-dom"

export const MainLayout: React.FC= () =>{
  return (
    <>
      <Header/>
      <div className="container mt-6 mx-auto max-w-[720px] lg:max-w-[1024px]">
        <Outlet />
      </div>
    </>
  )
}