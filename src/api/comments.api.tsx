import { urls } from "./urls";
import { generateClient } from "./client";
import { IPagination, IResDto } from "../types/global.type";
import { IComments } from "../types/comments.type";
import { listsLimit } from "../utits/config";

interface IFetchPostCommentsResDto extends IResDto {
  comments: IComments[];
}
interface IFetchPostCommentsReqDto extends IPagination {
  postId: number
}
interface IFetchUserCommentsReqDto extends IPagination {
  userId: number
}
type fetchPostComments = (_: IFetchPostCommentsReqDto) => Promise<IFetchPostCommentsResDto>;
type fetchUserComments = (_: IFetchUserCommentsReqDto) => Promise<IFetchPostCommentsResDto>;

export const fetchPostComments: fetchPostComments= async ({postId, ...params}) =>{
  const client= generateClient();
  const response= await client.get<IFetchPostCommentsResDto>(urls.comments.byPostId(postId), {params: { limit: params?.limit || listsLimit, skip: params?.skip || 0 }});
  return response.data
}
export const fetchUserComments: fetchUserComments= async ({userId, ...params}) =>{
  const client= generateClient();
  const response= await client.get<IFetchPostCommentsResDto>(urls.comments.byUserId(userId), {params: { limit: params?.limit || listsLimit, skip: params?.skip || 0 }});
  return response.data
}