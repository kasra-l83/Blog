export interface IUser {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  ip: string
  address: {
    address: string
    city: string
    country: string
  }
  role: string
}