import * as sinon from 'sinon';
import { expect } from 'chai';

import UserEmoji from '../../../../db/models/UserEmoji';
import { UsersEmojisCreateDb } from '../../Mocks/UsersEmojisDb';
import UsersEmojisService from '../../../Services/UsersEmojis';
import statusHttp from '../../../Utils/statusHttp';

describe('Testes unitários para UsersEmojis na camada de Service', function() {
  afterEach(function() { sinon.restore() });

  it('01 - Teste se e retornado os valores corretos em caso de sucesso', async function() {
    sinon.stub(UserEmoji, 'create').resolves(UsersEmojisCreateDb[0] as UserEmoji);

    const userEmojiService = new UsersEmojisService();
    const { type, message } = await userEmojiService.postCreate(
      { userId: 1, emojiId: 3 }
    );

    expect(type).to.be.equal(null)
    expect(message).to.be.equal(UsersEmojisCreateDb[0]);
  });

  it('02 - Teste se e retornado erro ao tentar registrar', async function() {
    sinon.stub(UserEmoji, 'create').resolves();

    const userEmojiService = new UsersEmojisService();
    const { type, message } = await userEmojiService.postCreate(
      { userId: 0, emojiId: 0 }
    );

    expect(type).to.be.equal(statusHttp.conflict);
    expect(message).to.be.equal('Error registering');
  });

  it('03 - Teste se é retornado os dados corretos pelo id', async function() {
    sinon.stub(UserEmoji, 'findAll').resolves(UsersEmojisCreateDb as UserEmoji[]);

    const userEmojiRepository = new UsersEmojisService();
    const { type, message } = await userEmojiRepository.getId(1);

    expect(type).to.be.equal(null);
    expect(message).to.be.equal(UsersEmojisCreateDb);
  });

  it('04 - Teste se é retornado erro a o tentar consultar pelo id', async function() {
    sinon.stub(UserEmoji, 'findOne').resolves();

    const userEmojiRepository = new UsersEmojisService();
    const { type, message } = await userEmojiRepository.getId(0);

    expect(type).to.be.equal(statusHttp.notFound);
    expect(message).to.be.equal('id not found');
  });

  it('05 - Teste se é retornado os dados corretos pelo userId', async function() {
    sinon.stub(UserEmoji, 'findAll').resolves(UsersEmojisCreateDb as UserEmoji[]);

    const userEmojiRepository = new UsersEmojisService();
    const { type, message } = await userEmojiRepository.getUserId(1);

    expect(type).to.be.equal(null);
    expect(message).to.be.equal(UsersEmojisCreateDb);
  });

  it('06 - Teste se é retornado erro a o tentar consultar pelo userId', async function() {
    sinon.stub(UserEmoji, 'findAll').resolves([]);

    const userEmojiRepository = new UsersEmojisService();
    const { type, message } = await userEmojiRepository.getUserId(0);

    expect(type).to.be.equal(statusHttp.notFound);
    expect(message).to.be.equal('userId not found');
  });

  it('07 - Teste se é retornado os dados corretos pelo emojiId', async function() {
    sinon.stub(UserEmoji, 'findAll').resolves(UsersEmojisCreateDb as UserEmoji[]);

    const userEmojiRepository = new UsersEmojisService();
    const { type, message } = await userEmojiRepository.getEmojiId(3);

    expect(type).to.be.equal(null);
    expect(message).to.be.equal(UsersEmojisCreateDb);
  });

  it('08 - Teste se é retornado erro a o tentar consultar pelo emojiId', async function() {
    sinon.stub(UserEmoji, 'findAll').resolves([]);

    const userEmojiRepository = new UsersEmojisService();
    const { type, message } = await userEmojiRepository.getEmojiId(0);

    expect(type).to.be.equal(statusHttp.notFound);
    expect(message).to.be.equal('emojiId not found');
  });

  it('09 - Teste se é possivel deletar passando o userId e emojiId', async function() {
    sinon.stub(UserEmoji, 'destroy').resolves(201);

    const userEmojiRepository = new UsersEmojisService();
    const { type, message } = await userEmojiRepository.deleteDestroy({
      userId: 4, emojiId: 8
    });

    expect(type).to.be.equal(null);
    expect(message).to.be.equal('success');
  });
})