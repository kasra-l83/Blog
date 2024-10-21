import { IPost } from "./posts.type"
import { IUser } from "./users.type"

export interface IResDto{
    skip: number
    limit: number
    total: number
}
export interface IPagination{
    skip?: number
    limit?: number
}
export interface IData {
    user: IUser;
    post: IPost;
}