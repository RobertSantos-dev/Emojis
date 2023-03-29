import * as sinon from 'sinon';
import { expect } from 'chai';

import Emoji from '../../../../db/models/Emoji';
import { EmojiDb } from '../../Mocks/EmojisDb';
import EmojisRepository from '../../../Repositories/Emojis';

describe('Testes para a Tabela de emojis', function() {
  afterEach(function() { sinon.restore() });

  it('01 - Teste se é retornado os valores corretos pelo id do emoji', async function() {
    sinon.stub(Emoji, 'findOne').resolves(EmojiDb[0] as Emoji);

    const emojisRepository = new EmojisRepository();
    const result = await emojisRepository.getId(1);

    expect(result).to.be.been.equal(EmojiDb[0]);
  })

  it('02 - Teste se é retornado os valores corretos pelo codigo do emoji', async function() {
    sinon.stub(Emoji, 'findOne').resolves(EmojiDb[2] as Emoji);

    const emojisRepository = new EmojisRepository();
    const result = await emojisRepository.getCode('1F602');

    expect(result).to.be.been.equal(EmojiDb[2]);
  })

  it('03 - Teste se é retornado todos os emojis', async function() {
    sinon.stub(Emoji, 'findAll').resolves(EmojiDb as Emoji[]);

    const emojisRepository = new EmojisRepository();
    const result = await emojisRepository.getAll();

    expect(result).to.be.been.equal(EmojiDb);
  })
})