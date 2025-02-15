export const urls= {
  posts: {
    list: "/posts",
    tag: "/posts/tag-list",
    byTag: (tag: string) => `/posts/tag/${tag}`,
    byId: (id: number) => `/posts/${id}`
  },
  users: {
    byId: (id: number) => `users/${id}`
  }
}