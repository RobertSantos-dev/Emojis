import * as sinon from 'sinon';
import { expect } from 'chai';

import UserEmoji from '../../../../db/models/UserEmoji';
import { UsersEmojisCreateDb } from '../../Mocks/UsersEmojisDb';
import UsersEmojisRepository from '../../../Repositories/UsersEmojis';

describe('Testes para a Tabela de usuario_emojis', function() {
  afterEach(function() { sinon.restore() });

  it('01 - Teste se é possivel inserir uma nova linha na tabela', async function() {
    sinon.stub(UserEmoji, 'create').resolves(UsersEmojisCreateDb as UserEmoji);

    const userEmojiRepository = new UsersEmojisRepository();
    const result = await userEmojiRepository.postCreate({ userId: 1, emojiId: 3 });

    expect(result).to.be.equal(UsersEmojisCreateDb);
  });

  it('02 - Teste se é retornado os dados corretos pelo id', async function() {
    sinon.stub(UserEmoji, 'findOne').resolves(UsersEmojisCreateDb as UserEmoji);

    const userEmojiRepository = new UsersEmojisRepository();
    const result = await userEmojiRepository.getId(1);

    expect(result).to.be.equal(UsersEmojisCreateDb);
  });

  it('03 - Teste se é retornado os dados corretos pelo userId', async function() {
    sinon.stub(UserEmoji, 'findOne').resolves(UsersEmojisCreateDb as UserEmoji);

    const userEmojiRepository = new UsersEmojisRepository();
    const result = await userEmojiRepository.getUserId(1);

    expect(result).to.be.equal(UsersEmojisCreateDb);
  });

  it('04 - Teste se é retornado os dados corretos pelo userId', async function() {
    sinon.stub(UserEmoji, 'findOne').resolves(UsersEmojisCreateDb as UserEmoji);

    const userEmojiRepository = new UsersEmojisRepository();
    const result = await userEmojiRepository.getEmojiId(3);

    expect(result).to.be.equal(UsersEmojisCreateDb);
  });
})