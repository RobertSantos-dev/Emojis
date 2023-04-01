export default interface IJwt {
  data: {
    id: number | string,
    email: string,
    password: string
    name: string,
    role: string,
  },
}
