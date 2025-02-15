export interface IComment{
    id: number
    body: string
    likes: number
    postId: number
    user: {
        id: number
        username: string
        fullName: string
    }
}