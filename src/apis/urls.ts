export const urls= {
  posts: {
    list: "/posts",
    tag: "/posts/tag-list",
    byTag: (tag: string) => `/posts/tag/${tag}`,
    byId: (id: number) => `/posts/${id}`
  },
  users: {
    list: "/users",
    byId: (id: number) => `/users/${id}`,
    postById: (id: number) => `/users/${id}/posts`
  },
  comments: {
    byPost: (id: number) => `/comments/post/${id}`
  }
}