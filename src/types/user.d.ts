export interface IUser{
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: "male" | "female"
    email: string
    phone: number
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: {
      color: string
      type: string
    }
    ip: string
    address: {
      address: string
      city: string
      state: string
      stateCode: string
      postalCode: number
      coordinates: {
        lat: number
        lng: number
      }
      country: string
    }
    macAddress: string
    university: string
    bank: {
      cardExpire: string
      cardNumber: number
      cardType: string
      currency: string
      iban: string
    }
    company: {
      department: string
      name: string
      title: string
      address: {
        address: string
        city: string
        state: string
        stateCode: string
        postalCode: number
        coordinates: {
          lat: number
          lng: number
        }
        country: string
      }
    }
    ein: number
    ssn: number
    userAgent: string
    crypto: {
      coin: string
      wallet: string
      network: string
    }
    role: "admin" | "moderator" | "user"
}