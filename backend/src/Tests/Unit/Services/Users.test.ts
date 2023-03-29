import * as sinon from 'sinon';
import { expect } from 'chai';

import Users from '../../../../db/models/User';
import { UsersDb } from '../../Mocks/UsersDb';
import UsersServices from '../../../Services/Users';

describe('Testes unitarios para Users na camada de Service', function() {
  afterEach(function() { sinon.restore(); })

  it('01 - Teste sé é retornado os dados corretos da função getEmail', async function() {
    sinon.stub(Users, 'findOne').resolves(UsersDb[0] as Users);

    const usersServices = new UsersServices();
    const { type, message } = await usersServices.getEmail('robert@email.com');

    expect(type).to.be.equal(null);
    expect(message).to.be.equal(UsersDb[0]);
  })

  it('02 - Teste sé é retornado um error da função getEmail', async function() {
    sinon.stub(Users, 'findOne').resolves();

    const usersServices = new UsersServices();
    const { type, message } = await usersServices.getEmail('error@email.com');

    expect(type).to.be.equal(404);
    expect(message).to.be.equal('User not found');
  })

  it('03 - Teste sé é retornado os dados corretos da função getName', async function() {
    sinon.stub(Users, 'findOne').resolves(UsersDb[1] as Users);

    const usersServices = new UsersServices();
    const { type, message } = await usersServices.getName('user');

    expect(type).to.be.equal(null);
    expect(message).to.be.equal(UsersDb[1]);
  })

  it('04 - Teste sé é retornado um error da função getName', async function() {
    sinon.stub(Users, 'findOne').resolves();

    const usersServices = new UsersServices();
    const { type, message } = await usersServices.getName('error');

    expect(type).to.be.equal(404);
    expect(message).to.be.equal('Username not found');
  })

  it('05 - Teste sé é retornado os dados corretos da função getAll', async function() {
    sinon.stub(Users, 'findAll').resolves(UsersDb as Users[]);

    const usersServices = new UsersServices();
    const { type, message } = await usersServices.getAll();

    expect(type).to.be.equal(null);
    expect(message).to.be.equal(UsersDb);
  })
})