import { generateClient } from "./client"
import { urls } from "./urls";

export const fetchPostsList= async (page: number, perPage: number) =>{
    const client= generateClient();
    const response= await client.get(urls.posts.list, {
        params: {
            limit: perPage,
            skip: page
        }
    })
    return response.data;
}
export const fetchTagsList= async () =>{
    const client= generateClient();
    const response= await client.get(urls.posts.tags)
    return response.data;
}