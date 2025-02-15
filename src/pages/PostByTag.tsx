import React from "react"
import { IUser } from "../types/user"
import { IPost } from "../types/post"
import { IData } from "../types/global"
import { NotFoundPage } from "./NotFound"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchPostsListByTag } from "../apis/posts.api"
import { fetchUsersListByIds } from "../apis/users.api"
import { PostCard, PostCardSkeleton } from "../components/PostCard"

export const PostByTag: React.FC= () =>{
  const [perPage, setPerPage]= React.useState<number>(3);
  const [data, setData]= React.useState<IData[]>([]);
  const { tag }= useParams();
  
  if(!isNaN(tag) || tag.trim()=== "") return <NotFoundPage/>

  const posts= useQuery({
    queryKey: ["postsByTag", tag, perPage],
    queryFn: () => fetchPostsListByTag(perPage, 1, tag as string),
    refetchOnWindowFocus: false
  })
  const users= useQuery({
    queryKey: ["usersPostById", posts.data?.posts],
    queryFn: () => fetchUsersListByIds(
      (posts.data?.posts || []).map((post: IPost) => Number(post.userId))
    ),
    enabled: posts.isSuccess,
    refetchOnWindowFocus: false
  })

  React.useEffect(() =>{
    if (!posts.isSuccess || !users.isSuccess || !posts.data || !users.data) return;
    const newData: IData[]= []
    for (const post of posts.data.posts) {
      const user= users.data.find(
        (el) => Number(el.id=== Number(post.userId))
      ) as IUser
      newData.push({ user, post })
    }
    setData(newData);
  }, [posts.isSuccess, users.isSuccess, posts.data, users.data])

  return (
    <section>
      <h1 className="text-3xl font-bold sm:hidden">{tag}</h1>
      {posts.isLoading || users.isLoading && (
        Array.from({length: 3}, (_, index) =>(
          <PostCardSkeleton key={index}/>
        ))
      )}
      {data.map((el) =>(
        <PostCard key={el.post.id} user={el.user} post={el.post}/>
      ))}
      {posts.isSuccess && users.isSuccess && (
        <button onClick={() => setPerPage(perPage+ 3)}
          className="text-purple-500 w-full mt-5 hover:text-purple-700 dark:hover:text-purple-300"
        >
          Load More
        </button>
      )}
    </section>
  )
}