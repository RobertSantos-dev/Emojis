import * as sinon from 'sinon';
import { expect } from 'chai';

import Users from '../../../../db/models/User';
import { UsersDb } from '../../Mocks/UsersDb';
import UsersRepository from '../../../Repositories/Users';


describe('Testes para a Tabela de usuarios', function() {
  afterEach(function() { sinon.restore(); })

  it('01 - Teste se os dados pelo email certo', async function() {
    sinon.stub(Users, 'findOne').resolves(UsersDb[1] as Users);

    const repository = new UsersRepository();
    const result = await repository.getEmail('usuario@email.com');

    expect(result).to.be.deep.equal(UsersDb[1]);
  });

  it('02 - Teste se os dados são retornados pelo nome certo', async function() {
    sinon.stub(Users, 'findOne').resolves(UsersDb[1] as Users);

    const repository = new UsersRepository();
    const result = await repository.getName('User');

    expect(result).to.be.deep.equal(UsersDb[1]);
  });

  it('03 - Teste se todos os usuarios são retornados com sucesso', async function() {
    sinon.stub(Users, 'findAll').resolves(UsersDb as Users[]);

    const repository = new UsersRepository();
    const result = await repository.getAll();

    expect(result).to.be.deep.equal(UsersDb);
  });
})
