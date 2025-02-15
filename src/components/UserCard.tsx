import { IUser } from "../types/user"
import { Link } from "react-router-dom"

interface IUserCard {
    user: IUser
}

export const UserCardSkeleton: React.FC= () =>{
    return (
        <div className="py-12 border-b flex items-center justify-between dark:border-b-gray-700">
            <div className="size-32 bg-gray-200 rounded-full"></div>
            <div className="space-y-2">
                <div className="bg-gray-200 rounded h-6 w-40"></div>
                <div className="bg-gray-200 rounded h-6 w-60"></div>
                <div className="bg-gray-200 rounded h-6 w-80"></div>
            </div>
            <div className="space-y-2">
                <div className="bg-gray-200 rounded h-6 w-20"></div>
                <div className="bg-gray-200 rounded h-6 w-32"></div>
                <div className="bg-gray-200 rounded h-6 w-80"></div>
            </div>
        </div>
    )
}
export const UserCard: React.FC<IUserCard>= ({user}) =>{
    return (
        <div className="py-12 border-b flex items-center justify-between dark:text-white dark:border-b-gray-700">
            <Link to={`/users/${user.id}`}>
                <img src={user.image} alt="" />
            </Link>
            <div>
                <h3>{user.firstName} {user.maidenName} {user.lastName}</h3>
                <h3>{user.phone}</h3>
                <h3>{user.email}</h3>
            </div>
            <div>
                <h3>Age: {user.age}</h3>
                <h3>Gender: {user.gender}</h3>
                <h3>Location: {user.address.city}, {user.address.country}</h3>
            </div>
        </div>
    )
}