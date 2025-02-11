import { IUser } from "../types/user"
import { IPost } from "../types/post"
import { IData } from "../types/global"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { PostCard, PostCardSkeleton } from "../components/PostCard"
import { fetchPostsList } from "../apis/posts.api"
import { fetchUsersListByIds } from "../apis/users.api"

function HomePage() {
  const [data, setData]= useState<IData[]>([]);
  
  const posts= useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPostsList(1, 5)
  })
  const users= useQuery({
    queryKey: ["usersPostById"],
    queryFn: () => fetchUsersListByIds(
      (posts.data?.posts || []).map((post: IPost) => Number(post.userId))
    ),
    enabled: posts.isSuccess
  })

  useEffect(() =>{
    if (!posts.isSuccess || !users.isSuccess || !posts.data || !users.data) return;
    const newData: IData[]= []
    for (const post of posts.data.posts) {
      const user= users.data.find(
        (el) => Number(el.id=== Number(post.userId))
      ) as IUser
      newData.push({ user, post })
    }
    setData(newData)
  }, [posts.isSuccess, users.isSuccess, posts.data, users.data])

  return (
    <>
      <h1 className="text-3xl font-bold dark:text-white sm:text-6xl">Latest</h1>
      <h3 className="pt-5 pb-8 border-b text-gray-500 text-lg dark:border-gray-700">A blog created with React and Tailwind.css</h3>
      {posts.isLoading || users.isLoading && (
        Array.from({length: 5}, (_, index) =>(
          <PostCardSkeleton key={index}/>
        ))
      )}
      {data.map((el, index) =>(
        <PostCard key={index} user={el.user} post={el.post}/>
      ))}
    </>
  )
}
export default HomePage