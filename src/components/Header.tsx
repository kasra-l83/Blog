import {Link} from "react-router-dom"

export const Header: React.FC = () =>{
  return (
    <div className="flex justify-between max-w-[1000px] mx-auto py-8">
      <div className="flex items-center space-x-4">
        <Link to="/"><div className="size-10 bg-lightPurple text-[white] flex justify-center items-center text-2xl font-extrabold cursor-pointer">T</div></Link>
        <Link to="/"><h1 className="text-2xl font-extrabold cursor-pointer hover:text-lightPurple">Treact</h1></Link>
      </div>
      <div className="flex gap-x-7 font-semibold text-base px-2 items-center">
        <Link to="/"><button className="border-b-2 border-lightGray hover:border-b-2 hover:border-lightPurple">Home</button></Link>
        <Link to="/users"><button className="border-b-2 border-lightGray hover:border-b-2 hover:border-lightPurple">Users</button></Link>
        <Link to="/posts"><button className="border-b-2 border-lightGray hover:border-b-2 hover:border-lightPurple">Posts</button></Link>
        <button className="text-base py-2 px-7 font-bold bg-lightPurple hover:bg-darkPurple text-[white] rounded-md">Download Now</button>
      </div>
    </div>
  )
}