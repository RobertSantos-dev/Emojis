import * as sinon from 'sinon';
import { expect } from 'chai';

import Emoji from '../../../../db/models/Emoji';
import { EmojiDb } from '../../Mocks/EmojisDb';
import EmojisService from '../../../Services/Emojis';

describe('Testes unitarios para Emojis na camada de Service', function() {
  afterEach(function() { sinon.restore() });

  it('01 - Teste se é retornado os dados corretos da função getId', async function() {
    sinon.stub(Emoji, 'findOne').resolves(EmojiDb[0] as Emoji);

    const emojisService = new EmojisService();
    const { type, message } = await emojisService.getId(1);

    expect(type).to.be.been.equal(null);
    expect(message).to.be.been.equal(EmojiDb[0])
  })

  it('02 - Teste se é retornado error da função getId', async function() {
    sinon.stub(Emoji, 'findOne').resolves();

    const emojisService = new EmojisService();
    const { type, message } = await emojisService.getId(100);

    expect(type).to.be.been.equal(404)
    expect(message).to.be.been.equal('Id not found');
  })

  it('03 - Teste se é retornado do dados corretos da função getCode', async function() {
    sinon.stub(Emoji, 'findOne').resolves(EmojiDb[3] as Emoji);

    const emojisService = new EmojisService();
    const { type, message } = await emojisService.getCode('1F603');

    expect(type).to.be.been.equal(null)
    expect(message).to.be.been.equal(EmojiDb[3]);
  })

  it('04 - Teste se é retornado error da função getCode', async function() {
    sinon.stub(Emoji, 'findOne').resolves();

    const emojisService = new EmojisService();
    const { type, message } = await emojisService.getCode('33422');

    expect(type).to.be.been.equal(404)
    expect(message).to.be.been.equal('Code not found');
  })

  it('05 - Teste se é retornado os dados corretos da função getAll', async function() {
    sinon.stub(Emoji, 'findAll').resolves(EmojiDb as Emoji[]);

    const emojisService = new EmojisService();
    const { type, message } = await emojisService.getAll();

    expect(type).to.be.been.equal(null)
    expect(message).to.be.been.equal(EmojiDb);
  })
})