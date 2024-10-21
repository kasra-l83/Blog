export interface IComments {
  id: number
  body: string
  postId: number
  user: {
    id: number
    username: string
    fullName: string
  }
}