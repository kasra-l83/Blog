import { urls } from "./urls"
import { generateClient } from "./client"

export const fetchCommentsByPostId= async (id: number) =>{
  const client= generateClient();
  const responses= await client.get(urls.comments.byPost(id))
  return responses.data;
}