import { Outlet } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchTagsList } from "../apis/posts.api"

export const TagLayout: React.FC= () =>{
  const tags= useQuery({
    queryKey: ["tags"],
    queryFn: fetchTagsList,
    refetchOnWindowFocus: false
  })
  
  return (
    <div className="flex gap-x-20">
      <div className="bg-gray-100 w-72 rounded-md shadow-[0px_8px_8px_0px_rgba(0,0,0,0.2)] px-6 py-4">
        <ul className="space-y-4">
          {tags.data?.map((tag: string, index: number) =>(
            <li className="text-sm font-bold uppercase" key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <Outlet/>
    </div>
  )
}