import React from "react"
import { IUser } from "../types/user"
import { useQuery } from "@tanstack/react-query"
import { fetchUsersList } from "../apis/users.api"
import { UserCard, UserCardSkeleton } from "../components/UserCard"

export const UserPage: React.FC= () =>{
    const [perpage, setPerPage] = React.useState<number>(5);

    const users= useQuery({
        queryKey: ["users", perpage],
        queryFn: () => fetchUsersList(perpage, 0),
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
                <button onClick={() => setPerPage(perpage+ 5)} 
                    className="text-purple-500 w-full mt-5 hover:text-purple-700 dark:hover:text-purple-300"
                >
                    Load More
                </button>
            )}
        </section>
    )
}