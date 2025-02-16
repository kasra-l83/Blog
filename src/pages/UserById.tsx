import { IPost } from "../types/post"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchUserById } from "../apis/users.api"
import { fetchPostsByUserId } from "../apis/posts.api"
import { UserCard, UserCardSkeleton } from "../components/UserCard"
import { PostCard, PostCardSkeleton } from "../components/PostCard"

export const UserByIdPage: React.FC= () =>{
    const {id}= useParams();

    const user= useQuery({
        queryKey: ["userById"],
        queryFn: () => fetchUserById(Number(id)),
        refetchOnWindowFocus: false
    })
    const posts= useQuery({
        queryKey: ["postsByUserId"],
        queryFn: () => fetchPostsByUserId(Number(id)),
        enabled: user.isSuccess,
        refetchOnWindowFocus: false
    })

    return (
        <>
            {user.isLoading && (
                <UserCardSkeleton/>
            )}
            {user.isSuccess && (
                <UserCard user={user.data}/>
            )}
            {posts.isLoading && (
                <PostCardSkeleton/>
            )}
            {posts.data?.posts.map((post: IPost) =>(
                <PostCard key={post.id} user={user.data} post={post}/>
            ))}
        </>
    )
}