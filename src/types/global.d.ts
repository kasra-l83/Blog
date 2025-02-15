import { IPost } from "./post"
import { IUser } from "./user"
import { IComment } from "./comment"

export interface IData {
    user: IUser
    post: IPost
}
export interface IComments {
    user: IUser
    comment: IComment
}