import { IPost } from "../types/posts.type";
import { IUser } from "../types/users.type";

interface IUserCardProps {
    user: IUser
    post: IPost
}

export const UserCardSkeleton: React.FC= () =>{
    return (
        <div className="flex justify-between py-12 space-x-5 items-center border-t">
            <div className="size-32 bg-lightGray rounded-full"></div>
            <div className="flex-col space-y-2">
                <div className="w-20 h-6 bg-lightGray rounded-md"></div>
                <div className="w-32 h-6 bg-lightGray rounded-md"></div>
                <div className="w-52 h-6 bg-lightGray rounded-md"></div>
            </div>
            <div className="flex-col space-y-2">
                <div className="w-16 h-5 bg-lightGray rounded-md"></div>
                <div className="w-28 h-6 bg-lightGray rounded-md"></div>
            </div>
        </div>
    )
}
export const UserCard: React.FC<IUserCardProps>= ({user}) =>{
    return (
        <div className="flex justify-between py-12 space-x-5 items-center border-t">
            <img src={user.image} alt={user.username} />
            <div className="flex-col">
                <h3>{user.firstName} {user.maidenName} {user.lastName}</h3>
                <h6>{user.phone}</h6>
                <h6>{user.email}</h6>
            </div>
            <div>
                <h4>Role: {user.role}</h4>
                <h6>Gender: {user.gender}</h6>
            </div>
        </div>
    )
}