import { IPost } from "../types/post"
import { IUser } from "../types/user"
import { Link } from "react-router-dom"
import { MdOutlineArrowRightAlt } from "react-icons/md"

interface IPostCardProps {
  user: IUser
  post: IPost
  extendBody?: boolean
}

export const PostCardSkeleton: React.FC= () =>{
  return (
    <div className="flex py-12 border-b gap-x-12 lg:gap-x-24 items-center dark:border-gray-700">
      <div className="size-32 bg-gray-200 rounded-full"></div>
      <div className="w-full">
        <div className="bg-gray-200 rounded h-6 w-3/6"></div>
        <span className="flex gap-x-3 mt-2">
          {Array.from({length: 3}, (_, index) =>(
            <div key={index} className="bg-gray-200 h-6 w-12 rounded"></div>
          ))}
        </span>
        <div className="bg-gray-200 rounded h-6 w-full mt-5"></div>
        <div className="bg-gray-200 rounded h-6 w-3/6 mb-5 mt-2"></div>
        <div className="bg-gray-200 rounded h-6 w-20"></div>
      </div>
    </div>
  )
}
export const PostCard: React.FC<IPostCardProps>= ({post ,user, extendBody}) =>{
  return (
    <div className="flex flex-col sm:flex-row gap-y-5 py-12 gap-x-12 items-center border-b lg:gap-x-24 dark:border-gray-700">
      <img src={user.image}/>
      <div className="flex-col">
        <h2 className="text-xl font-bold dark:text-white">{post.title}</h2>
        <ul className="flex gap-x-3 flex-wrap">
          {post.tags.map((tag, index) =>(
            <li key={index}>
              <Link to={`/tags/${tag}`}>
                <button className="uppercase text-purple-500 font-medium hover:text-purple-700 dark:hover:text-purple-300">{tag}</button>
              </Link>
            </li>
          ))}
        </ul>
        <p className={`text-gray-500 leading-7 my-5 ${extendBody? "" : "line-clamp-2"}`}>{post.body}</p>
        <button className="text-purple-500 font-medium flex gap-x-1 hover:text-purple-700 dark:hover:text-purple-300">
          Read more <MdOutlineArrowRightAlt className="text-xl mt-1"/>
        </button>
      </div>
    </div>
  )
}