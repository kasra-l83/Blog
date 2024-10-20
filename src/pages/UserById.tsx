import { useQuery } from "@tanstack/react-query";
import { Link, Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchPostById } from "../api/posts.api";
import { AxiosError } from "axios";
import { fetchSingleUserByIds } from "../api/user.api";
import { UserCard } from "../components/UserCard";

export const PostById: React.FC = () => {
  const { id } = useParams();
  const validId = !isNaN(Number(id));
  const location= useLocation()

  const post = useQuery({
    queryKey: ["fetching-post-info", id],
    queryFn: () => fetchPostById(Number(id)),
    enabled: validId,
  })
  const user = useQuery({
    queryKey: ["fetching-user-by-id", post.data?.userId],
    queryFn: () => fetchSingleUserByIds(Number(post.data?.userId)),
    enabled: post.isSuccess
  })
  if (!validId || (post.error as AxiosError)?.status === 404 || (user.error as AxiosError)?.status === 404){
    return <Navigate to="/404" />;
  }
  if(!user.isSuccess || !post.isSuccess) return
  return (
    <div className="max-w-[1000px] mx-auto">
      <UserCard user={user.data} post={post.data}/>
      {
      !location.pathname.includes("comments") && <Link to={`post/${post.data.id}/comments`}><button className="text-gray-500 ml-5">Comments</button></Link>
      }
      <div>
        <Outlet/>
      </div>
    </div>
  )
}