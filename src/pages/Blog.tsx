import React from "react"
import { IUser } from "../types/user"
import { IPost } from "../types/post"
import { IData } from "../types/global"
import { useQuery } from "@tanstack/react-query"
import { fetchPostsList } from "../apis/posts.api"
import { fetchUsersListByIds } from "../apis/users.api"
import { PostCard, PostCardSkeleton } from "../components/PostCard"

export const Blog: React.FC= () =>{
    const [perPage, setPerPage]= React.useState<number>(5);
    const [data, setData]= React.useState<IData[]>([]);

    const posts= useQuery({
        queryKey: ["postsByTag", perPage],
        queryFn: () => fetchPostsList(perPage, 1),
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
            {posts.isLoading || users.isLoading && (
                Array.from({length: 3}, (_, index) =>(
                    <PostCardSkeleton key={index}/>
                ))
            )}
            {data.map((el) =>(
                <PostCard key={el.post.id} user={el.user} post={el.post}/>
            ))}
            {posts.isSuccess && users.isSuccess && (
                <button onClick={() => setPerPage(perPage+ 5)}
                    className="text-purple-500 w-full mt-5 hover:text-purple-700 dark:hover:text-purple-300"
                >
                    Load More
                </button>
            )}
        </section>
    )
}