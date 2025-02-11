import { generateClient } from "./client"
import { urls } from "./urls";

export const fetchPostsList= async (page: number, perPage: number) =>{
    const client= generateClient();
    const response= await client.get(urls.posts.list(page, perPage));
    return response.data;
}