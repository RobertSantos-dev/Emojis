export interface IUsersEmail {
  email: string,
}

export interface IUsersPassword {
  password: string,
}

export interface IUserLogin extends IUsersEmail, IUsersPassword {}

export interface IUsersGet extends IUsersEmail {
  id?: number,
  name: string,
  role?: string,
}

export interface IUsers extends IUsersGet, IUsersPassword {}