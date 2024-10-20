import { Link } from "react-router-dom";
import { IPost } from "../types/posts.type";
import { IUser } from "../types/users.type";
import { classNames } from "../utits/classNames";

interface IPostCardProps {
    user: IUser
    post: IPost
    extendBody?: boolean
}

export const PostCardSkeleton: React.FC= () =>{
  return (
    <div className="flex py-12 space-x-5 items-center">
      <div className="size-32 bg-lightGray rounded-full"></div>
      <div className="flex-col space-y-2">
        <div className="bg-lightGray h-7 w-80 rounded-md"></div>
        <div className="flex space-x-3">
          {[1,2,3].map((el) =>{
            return(
              <div key={el} className="h-6 w-12 bg-lightGray rounded-md"></div>
            )
          })}
        </div>
        <div className="h-6 w-[852px] bg-lightGray rounded-md"></div>
      </div>
    </div>
  )
}
export const PostCard: React.FC<IPostCardProps>= ({post ,user, extendBody}) =>{
  return (
    <div className="flex py-12 space-x-5 items-center border-t">
      <img src={user.image} alt={user.username} />
      <div className="flex-col">
        <Link to={`/post/${post.id}`}>
          <p className="text-xl font-bold hover:text-lightPurple inline">{post.title}</p>
        </Link>
        <div className="flex space-x-3">
          {post.tags.map((tag, index) =>(
            <button key={index} className="capitalize text-lightPurple hover:text-darkPurple">{tag}</button>
          ))}
        </div>
        <p className={classNames(extendBody? "" : "line-clamp-1")}>{post.body}</p>
      </div>
    </div>
  )
}