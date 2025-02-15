import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchUserById } from "../apis/users.api"
import { fetchPostsById } from "../apis/posts.api"
import { PostCard, PostCardSkeleton } from "../components/PostCard"

function BlogByIdPage() {
  const { id }= useParams();

  const posts= useQuery({
    queryKey: ["postsByTag", id],
    queryFn: () => fetchPostsById(Number(id)),
    refetchOnWindowFocus: false
  })
  const users= useQuery({
    queryKey: ["usersPostById", posts.data],
    queryFn: () => fetchUserById(posts.data?.id),
    enabled: posts.isSuccess,
    refetchOnWindowFocus: false
  })
  
  return (
    <section>
      {!posts.isSuccess || !users.isSuccess && (
        <PostCardSkeleton/>
      )}
      {posts.isSuccess && users.isSuccess && (
        <PostCard post={posts.data} user={users.data} extendBody={true}/>
      )}
    </section>
  )
}
export default BlogByIdPage