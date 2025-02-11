export const urls= {
  posts: {
    list: (page: number, perPage: number) => `/posts?skip=${page}&limit=${perPage}`
  },
  users: {
    byId: (id: number) => `users/${id}`
  }
}