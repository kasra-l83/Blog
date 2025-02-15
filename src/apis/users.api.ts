import { urls } from "./urls"
import { IUser } from "../types/user"
import { generateClient } from "./client"

export const fetchUsersListByIds= async (ids: Array<number>) =>{
  const client= generateClient();
  const responses= await Promise.all(ids.map((id: number) =>{
    return client.get<IUser>(urls.users.byId(id))
  }))
  const data: IUser[]= []
  for (const el of responses) {
    data.push(el.data)
  }
  return data;
}
export const fetchUserById= async (id: number) =>{
  const client= generateClient();
  const responses= await client.get(urls.users.byId(id))
  return responses.data;
}
export const fetchUsersList= async (page: number, perPage: number) =>{
  const client= generateClient();
  const responses= await client.get(urls.users.list, {
    params: {
      limit: page,
      skip: perPage
  }
  })
  return responses.data;
}