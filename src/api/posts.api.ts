import { urls } from "./urls";
import { generateClient } from "./client";
import { IPost } from "../types/posts.type";
import { IPagination, IResDto } from "../types/global.type";
import { listsLimit } from "../utits/config";

interface IFetchPostsResDto extends IResDto {
  posts: IPost[]
}
interface IFetchPostsReqDto extends IPagination {
  tag?: string;
}
type fetchPostsListType = (_?: IFetchPostsReqDto) => Promise<IFetchPostsResDto>;
type fetchPostByIdType = (_: number) => Promise<IPost>;

export const fetchPostsList: fetchPostsListType= async (params) =>{
  const client= generateClient();
  const url = !params?.tag ? urls.posts.list : urls.posts.byTag(params.tag);
  const response= await client.get<IFetchPostsResDto>(url, {
    params: {limit: params?.limit || listsLimit, skip: params?.skip || 0}
  })
  return response.data;
}
export const fetchPostById: fetchPostByIdType = async (id: number) => {
  const client = generateClient();
  const response = await client.get<IPost>(urls.posts.byId(id));
  return response.data;
}