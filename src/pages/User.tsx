import React from "react"
import { IUser } from "../types/user"
import { useQuery } from "@tanstack/react-query"
import { UserCard, UserCardSkeleton } from "../components/UserCard"
import { fetchUsersList } from "../apis/users.api"

export const UserPage: React.FC= () =>{
    const [page, setPage] = React.useState<number>(5);

    const users= useQuery({
        queryKey: ["users", page],
        queryFn: () => fetchUsersList(page, 5),
        refetchOnWindowFocus: false
    })

    return (
        <section>
            {users.isLoading && (
                Array.from({length: 5}, (_, index) =>(
                    <UserCardSkeleton key={index}/>
                ))
            )}
            {users.data?.users.map((el: IUser) =>(
                <UserCard key={el.id} user={el}/>
            ))}
            {users.isSuccess && users.data?.limit< users.data?.total && (
                <button onClick={() => setPage(page+ 5)} 
                    className="text-purple-500 w-full mt-5 hover:text-purple-700 dark:hover:text-purple-300"
                >
                    Load More
                </button>
            )}
        </section>
    )
}