export const urls= {
  posts: {
    list: "/posts",
    tags: "/posts/tag-list",
    tag: (name: string) => `/posts/tag/${name}`
  },
  users: {
    byId: (id: number) => `users/${id}`
  }
}