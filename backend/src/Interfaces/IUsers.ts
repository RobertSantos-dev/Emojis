export interface IUsersLogin {
  email: string,
  password: string,
}

export interface IUsers extends IUsersLogin {
  id: number,
  name: string,
  role: string,
}