import * as jwt from 'jsonwebtoken';
import { IUsers } from '../Interfaces/IUsers';
import IJwt from '../Interfaces/IJwt';

const secret = 'jwt_secret'
const jwtConfig: jwt.SignOptions = { expiresIn: '1d', algorithm: 'HS256' };

export const createToken = (user: IUsers) => {
  const token = jwt.sign({ data: user }, secret, jwtConfig);

  return token;
};

export const tokenVerify = (token: string) => {
  try {
    const decode = jwt.verify(token, secret);
    return decode as IJwt;
  } catch (erro) {
    return { data: { email: 'Error' } }
  }
}

export default createToken;
