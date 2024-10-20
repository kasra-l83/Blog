import { fetchPostsList } from "../api/posts.api"
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { UserCard, UserCardSkeleton } from "../components/UserCard";
import { fetchUsersListByIds } from "../api/user.api";
import { IPost } from "../types/posts.type";
import { IUser } from "../types/users.type";
import { listsLimit } from "../utits/config";
import { Link } from "react-router-dom";

interface IData {
    user: IUser;
    post: IPost;
}

export const UsersPage: React.FC= () =>{
    const [data, setData]= React.useState<IData[]>([]);
    const [page, setPage] = React.useState<number>(1);
    const [dataLoading, setDataLoading] = React.useState<boolean>(false);
    
    const posts= useQuery({
        queryKey: ["fetching-users",page],
        queryFn: () => fetchPostsList({skip: page * listsLimit- listsLimit}),
        refetchOnWindowFocus: false,
    })
    const users= useQuery({
        queryKey: ["fetching-users-by-id", (posts.data?.posts || []).map((el) => String(el.userId)).join("")],
        queryFn: () => fetchUsersListByIds(
            (posts.data?.posts || []).map((el) => Number(el.userId))
        ),
        enabled: posts.isSuccess,
        refetchOnWindowFocus: false
    })

    React.useEffect(() =>{
        if (!posts.isSuccess || !users.isSuccess) return;
        if (!posts.data || !users.data) return;
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
        <div className="max-w-[600px] mx-auto">
            <div className="mb-5 space-y-4">
                <h1 className="text-6xl font-medium">Users List</h1>
                <h4 className="text-xl text-gray-400">This is a User List page</h4>
            </div>
            {(posts.isLoading || users.isLoading || dataLoading) && (
                <>
                    <UserCardSkeleton/>
                    <UserCardSkeleton/>
                    <UserCardSkeleton/>
                    <UserCardSkeleton/>
                    <UserCardSkeleton/>
                </>
            )}
            <>
                {data.map((el, index) =>{
                    return (
                        <Link key={index} to={`/post/${el.post.id}`}>
                            <UserCard user={el.user} post={el.post}/>
                        </Link>
                    )
                })}
                <button onClick={() => setPage((prevPage) => prevPage + 1)} className="text-[#DC2777] w-full mb-5">Load More</button>
            </>
        </div>
    )
}