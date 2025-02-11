export const urls= {
  posts: {
    list: "/posts",
    tags: "/posts/tag-list"
  },
  users: {
    byId: (id: number) => `users/${id}`
  }
}