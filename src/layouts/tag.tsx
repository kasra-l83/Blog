import { Link } from "react-router-dom"
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
    <div className="flex gap-x-5">
      <nav className="hidden bg-gray-100 min-w-72 max-w-72 rounded-md shadow-[0px_8px_8px_0px_rgba(0,0,0,0.2)] px-6 py-4 sm:block dark:bg-gray-900">
        <Link to="/blog">
          <h3 className="font-semibold mb-4 hover:text-purple-500 dark:text-white dark:hover:text-purple-500">ALL POSTS</h3>
        </Link>
        <ul className="flex flex-col gap-y-4">
          {tags.data?.map((tag: string) =>(
            <Link key={tag} to={`/tags/${tag}`}>
              <li
                className="text-sm font-medium uppercase text-gray-500 px-3 hover:text-purple-500 dark:text-gray-400 dark:hover:text-purple-500"
              >
                {tag}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}