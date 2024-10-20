export const Footer: React.FC = () =>{
  return (
    <div className="flex-col space-y-2 max-w-[1000px] mx-auto mb-5 pl-80">
      <h3 className="text-lg font-semibold">Subscribe to the newsletter</h3>
      <div className="flex space-x-3">
        <input type="email" placeholder="Enter your email" className="border-black border w-64 py-2 px-3 rounded-md focus:outline-none focus:border-[#DC2777] focus:ring-1 focus:ring-[#DC2777]"/>
        <button className="px-4 text-base text-white font-semibold bg-[#DC2777] hover:bg-[#aa2762] rounded-md">Sign up</button>
      </div>
    </div>
  )
}