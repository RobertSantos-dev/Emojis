export interface IUsersEmail {
  email: string,
}

export interface IUsersPassword {
  password: string,
}

export interface IUsersGet extends IUsersEmail {
  id: number,
  name: string,
  role: string,
}

export interface IUsers extends IUsersGet, IUsersPassword {}