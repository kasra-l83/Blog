import { IUser } from "../types/user"
import { Link } from "react-router-dom"
import { IComment } from "../types/comment"
import { AiOutlineLike } from "react-icons/ai"

interface ICommentCardProps {
  user: IUser
  comment: IComment
}

export const CommentCardSkeleton: React.FC= () =>{
    return (
        <div className="p-2 border rounded-lg mt-2 flex items-center justify-between">
            <div className="size-10 rounded-full bg-gray-200"></div>
            <div className="h-6 w-20 rounded bg-gray-200"></div>
            <div className="h-6 w-10 rounded bg-gray-200"></div>
        </div>
    )
}
export const CommentCard: React.FC<ICommentCardProps>= ({comment ,user}) =>{
    return (
        <div className="p-2 border rounded-lg mt-2 flex items-center justify-between">
            <Link to={`/users/${user.id}`}>
                <img src={user.image} alt="" className="size-10"/>
            </Link>
            <p>{comment.body}</p>
            <p className="flex items-center"><AiOutlineLike className="text-xl"/> {comment.likes}</p>
        </div>
    )
}