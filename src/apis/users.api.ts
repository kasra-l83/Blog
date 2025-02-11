import { urls } from "./urls"
import { IUser } from "../types/user"
import { generateClient } from "./client"

export const fetchUsersListByIds= async (ids) =>{
    const client= generateClient();
    const responses= await Promise.all
    (ids.map((id: number) =>{
        return client.get<IUser>(urls.users.byId(id));
      })
    )
    const data: IUser[]= []
    for (const el of responses) {
      data.push(el.data)
    }
    return data;
}