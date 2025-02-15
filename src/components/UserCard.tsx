import { IUser } from "../types/user"

interface IUserCard {
    user: IUser
}

export const UserCard: React.FC<IUserCard>= ({user}) =>{
    return (
        <div className="py-12 border-b flex items-center justify-between dark:text-white dark:border-gray-700">
            <img src={user.image} alt="" />
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