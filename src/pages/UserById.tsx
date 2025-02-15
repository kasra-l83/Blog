import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchUserById } from "../apis/users.api"
import { UserCard } from "../components/UserCard";

export const UserByIdPage: React.FC= () =>{
    const {id}= useParams();

    const user= useQuery({
        queryKey: ["userById"],
        queryFn: () => fetchUserById(Number(id)),
        refetchOnWindowFocus: false
    })
    console.log(user.data);
    return (
        <>
            {user.data && (
                <UserCard user={user.data}/>
            )}
        </>
    )
}