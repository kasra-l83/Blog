import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchTagsList } from "../apis/posts.api"

function TagsPage() {
  const tags= useQuery({
    queryKey: ["tags"],
    queryFn: fetchTagsList,
    refetchOnWindowFocus: false
  })
  
  return (
    <section className="flex flex-col justify-center md:items-center md:flex-row">
      <h2 className="text-4xl font-bold p-6 border-b md:text-6xl md:border-r md:border-b-0 dark:text-white">Tags</h2>
      <ul className="flex flex-wrap p-6 gap-y-4">
        {tags.data?.map((tag: string) =>(
          <Link key={tag} to={`/tags/${tag}`}>
            <li className="text-sm font-medium uppercase text-purple-500 px-3 hover:text-purple-700 dark:hover:text-purple-300">{tag}</li>
          </Link>
        ))}
      </ul>
    </section>
  )
}
export default TagsPage