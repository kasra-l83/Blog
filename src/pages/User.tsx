import { useQuery } from "@tanstack/react-query"
import { fetchUsersList } from "../apis/users.api"
import { IUser } from "../types/user"
import { UserCard } from "../components/UserCard"

export const UserPage: React.FC= () =>{
    const users= useQuery({
        queryKey: ["users"],
        queryFn: () => fetchUsersList(5, 1),
        refetchOnWindowFocus: false
    })
    console.log(users.data?.users);
    return (
        <section>
            {users.data?.users.map((el: IUser) =>(
                <UserCard key={el.id} user={el}/>
            ))}
        </section>
    )
}