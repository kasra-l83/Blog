export const urls= {
  posts: {
    list: "/posts",
    byTag: (tag: string) => `/posts/tag/${tag}`,
    byId: (id: number) => `/posts/${id}`
  },
  users: {
    list: "/users",
    byId: (id: number) => `/users/${id}`
  },
  comments: {
    byPostId: (postId: number) => `/comments/post/${postId}`,
    byUserId: (userId: number) => `/comments/user/${userId}`
  }
}