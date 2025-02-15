import React from "react"
import { IUser } from "../types/user"
import { IComment } from "../types/comment"
import { IComments } from "../types/global"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchPostsById } from "../apis/posts.api"
import { CommentCard, CommentCardSkeleton } from "../components/CommentCard"
import { fetchCommentsByPostId } from "../apis/comments.api"
import { PostCard, PostCardSkeleton } from "../components/PostCard"
import { fetchUserById, fetchUsersListByIds } from "../apis/users.api"

function BlogByIdPage() {
  const [show, setShow]= React.useState<boolean>(false);
  const [data, setData]= React.useState<IComments[]>([]);
  const { id }= useParams();

  const posts= useQuery({
    queryKey: ["postsByTag", id],
    queryFn: () => fetchPostsById(Number(id)),
    refetchOnWindowFocus: false
  })
  const user= useQuery({
    queryKey: ["usersPostById", posts.data],
    queryFn: () => fetchUserById(posts.data?.id),
    enabled: posts.isSuccess,
    refetchOnWindowFocus: false
  })
  const comments= useQuery({
    queryKey: ["commentsByPostId", id],
    queryFn: () => fetchCommentsByPostId(Number(id)),
    enabled: show,
    refetchOnWindowFocus: false
  })
  const users= useQuery({
    queryKey: ["usersByComments"],
    queryFn: () => fetchUsersListByIds(
      (comments.data?.comments || []).map((comment: IComment) => Number(comment.user.id))
    ),
    enabled: comments.isSuccess,
    refetchOnWindowFocus: false
  })

  React.useEffect(() =>{
    if (!comments.isSuccess || !users.isSuccess || !comments.data || !users.data) return;
    const newData: IComments[]= []
    for (const comment of comments.data.comments) {
      const user= users.data.find(
        (el) => Number(el.id=== Number(comment.user.id))
      ) as IUser
      newData.push({ user, comment })
    }
    setData(newData)
  }, [comments.isSuccess, users.isSuccess, comments.data, users.data])
  
  return (
    <section>
      {!posts.isSuccess || !user.isSuccess && (
        <PostCardSkeleton/>
      )}
      {posts.isSuccess && user.isSuccess && (
        <>
          <PostCard post={posts.data} user={user.data} extendBody={true}/>
          {!show && <button onClick={() => setShow(true)} className="mt-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            comments
          </button>}
          {show && comments.isLoading || users.isLoading && (
            Array.from({length: 3}, (_, index) =>(
              <CommentCardSkeleton key={index}/>
            ))
          )}
          {data.map((el) =>(
            <CommentCard key={el.comment.id} user={el.user} comment={el.comment}/>
          ))}
        </>
      )}
    </section>
  )
}
export default BlogByIdPage