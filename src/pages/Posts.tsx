import { fetchPostsList } from "../api/posts.api"
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PostCard, PostCardSkeleton } from "../components/PostCard";
import { fetchUsersListByIds } from "../api/user.api";
import { IUser } from "../types/users.type";
import { listsLimit } from "../utits/config";
import { IData } from "../types/global.type";

export const PostsPage: React.FC= () =>{
    const [data, setData]= React.useState<IData[]>([]);
    const [page, setPage] = React.useState<number>(1);
    const [dataLoading, setDataLoading] = React.useState<boolean>(false);

    const posts= useQuery({
        queryKey: ["posts",page],
        queryFn: () => fetchPostsList({skip: page * listsLimit- listsLimit}),
    })
    const users= useQuery({
        queryKey: ["postsById", (posts.data?.posts || []).map((el) => String(el.userId)).join("")],
        queryFn: () => fetchUsersListByIds(
            (posts.data?.posts || []).map((el) => Number(el.userId))
        ),
        enabled: posts.isSuccess,
    })

    React.useEffect(() =>{
        if (!posts.isSuccess || !users.isSuccess) return;
        if (!posts.data || !users.data) return;
        setDataLoading(() => true);
        const newData: IData[]= [];
        for (const post of posts.data.posts) {
            const user= users.data.find(
                (el) => Number(el.id === Number(post.userId))
            ) as IUser
            newData.push({ user, post });
        }
        setDataLoading(false);
        setData((prevState) => [...prevState, ...newData]);
    }, [posts.isSuccess, users.isSuccess, posts.data, users.data])

    return (
        <div className="max-w-[1000px] mx-auto">
            <div className="mb-5 space-y-4">
                <h1 className="text-6xl font-medium">Posts List</h1>
                <h4 className="text-xl text-[gray]">This is a Post List page</h4>
            </div>
            {(posts.isLoading || users.isLoading || dataLoading) && (
                <>
                    <PostCardSkeleton/>
                    <PostCardSkeleton/>
                    <PostCardSkeleton/>
                    <PostCardSkeleton/>
                    <PostCardSkeleton/>
                </>
            )}
            <>
                {data.map((el, index) =>{
                    return (
                        <PostCard key={index} user={el.user} post={el.post}/>
                    )
                })}
                <button onClick={() => setPage((prevPage) => prevPage + 1)} className="text-lightPurple hover:text-darkPurple w-full mb-5">Load More</button>
            </>
        </div>
    )
}