import { generateClient } from "./client"
import { urls } from "./urls";

export const fetchPostsList= async (page: number, perPage: number) =>{
    const client= generateClient();
    const response= await client.get(urls.posts.list, {
        params: {
            limit: page,
            skip: perPage
        }
    })
    return response.data;
}
export const fetchTagsList= async () =>{
    const client= generateClient();
    const response= await client.get(urls.posts.tags)
    return response.data;
}
export const fetchPostsListByTag= async (page: number, perPage: number, tag: string) =>{
    const client= generateClient();
    const response= await client.get(urls.posts.tag(tag), {
        params: {
            limit: page,
            skip: perPage
        }
    })
    return response.data;
}