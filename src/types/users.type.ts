export interface IUser {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  gender: string
  email: string
  phone: string
  image: string
  address: {
    city: string
    country: string
  }
  role: string
}