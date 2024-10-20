import {Link} from "react-router-dom"
import { IoIosSearch } from "react-icons/io";

export const NavBar: React.FC = () =>{
  return (
    <div className="flex justify-between max-w-[1000px] mx-auto py-8">
      <div className="flex items-center space-x-4">
        <img src="icon/Logo.png"/>
        <h1 className="text-2xl font-semibold">DummyJSON</h1>
      </div>
      <div className="flex gap-x-7 font-semibold text-base px-2 items-center">
        <Link to="/"><button className="hover:text-[#DC2777]">Home</button></Link>
        <Link to="/users"><button className="hover:text-[#DC2777]">Users</button></Link>
        <Link to="/posts"><button className="hover:text-[#DC2777]">Posts</button></Link>
        <IoIosSearch className="text-2xl hover:text-[#DC2777] cursor-pointer"/>
      </div>
    </div>
  )
}