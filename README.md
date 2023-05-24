# Emojis

## Resumo
Um álbum de Emojis, exclusivos para os usuarios da ***"Emojis Rede"***. Esta aplicação permite que cada usuario possa favoritar um emoji, mas para isso é necessario que uma conta seja registrada.

<br>

## Sumário
[01 - Explicação](#explicação)

[02 - Tecnologias e ferramentas](#tecnologias-e-ferramentas)

[03 - Status](#status)

<br>

## Explicação
<div align="center">
  <img src="./img/print_tree.png" width="35%" />
  <img src="./img/print_four.png" width="35%" />
  <img src="./img/print_one.png" width="35%" />
  <img src="./img/print_two.png" width="35%" />
</div>

<br>

O projeto **Emojis**. Foi criado com o objetivo de por em pratica os conhecimentos adquiridos em __FrontEnd__, __BackEnd__ e __Databases__.

<br>

Esta aplicação necessita que o usuario crie uma uma conta, e ao inserir o email e senha, o mesmo sera direcioando para uma pagina onde tera acesso a uma lista de `emojis`. E toda vez que o usuario clicar em um deles, entao podera ver outras informações e até mesmo poder marcar como favorito.

<br>

Abaixo, veja algumas informações:

<details open>
  <summary><strong>FrontEnd</strong></summary>
  <br>
  <p>As paginas são feitas da seguinte forma:</p>
  <ul>
    <li>
      <code>/emojis</code>: 
      É a pagina de login, onde o usuario, precisará, inserir seu email e senha para ter acesso a aplicação.
    </li>
    <li>
      <code>/register</code>: 
      É a pagina de registro de conta dos usuarios.
    </li>
    <li>
      <code>/emojis</code>: 
      É a pagina que mostra uma lista de todos os emojis disponiveis no banco de dados.
    </li>
    <li>
      <code>/emojis/:id</code>: 
      É a pagina que mostra informações de um emoji que foi selecionado pelo usuario.
    </li>
  </ul>
  <p>OBS: Estão na mesma ordem das imagens acima.</p>
</details>

<details open>
  <summary><strong>BackEnd</strong></summary>
  <br>
  <p>As rotas são feitas da seguinte forma:</p>
  <ul>
    <li>
      GET
      <ul>
        <li>
          <code>/emojis</code>:
          É utilizada para obter uma lista completa de todos os emojis disponiveis no <strong>BD</strong>.
        </li>
        <li>
          <code>/emojis/:id</code>:
          É utilizada para obter apenas um emoji que será localizado atraves de seu <code>id</code>.
        </li>
        <li>
          <code>/favorites/user/:userId</code>: 
          É utilizada para identificar todos os emojis favoritados pelo usuario passado por <code>id</code>.
        </li>
        <li>
          <code>/favorites/emoji/:emojiId</code>: 
          É utilizada para identificar os usuario que favoritaram o emoji passado por <code>id</code>.
        </li>
        <li>
          <code>/favorites/:id</code>: 
          É utilizada apenas para obter um valor, da tabela intermediaria, pelo seu <code>id</code>.
        </li>
      </ul>
    </li>
    <li>
      POST
      <ul>
        <li>
          <code>/users/login</code>: 
          É utilizada para fazer a requisição e validação do email do usuario.
        </li>
        <li>
          <code>/users/register</code>:
          É utilizada para fazer o registro de uma nova conta de usuario.
        </li>
      </ul>
    </li>
  </ul>
</details>

<details open>
  <summary><strong>Banco de Dados</strong></summary>
  <br>
  <p>Foi usado o tipo <em>relacional</em>, que usa as seguintes tabelas:</p>
  <ul>
    <li>
      <code>users</code>:
      Armazena todos os usuarios da aplicação.
    </li>
    <li>
      <code>emojis</code>: 
      Armazena todos os emojis da aplicação.
    </li>
    <li>
      <code>users_emojis</code>:
      Tabela intermediaria, que faz o relacionamentos dos usuarios que favoritaram um emoji.
    </li>
  </ul>
</details>

<br>

## Tecnologias e ferramentas
<table align="center" width="100%">
  <thead>
    <tr>
      <th>FrontEnd</th>
      <th>BackEnd</th>
      <th>Outros</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td width="200">
        React<br>
        Redux<br>
        Axios<br>
        React Router Dom
      </td>
      <td width="200">
        Node JS<br>
        Express<br>
        TypeScript<br>
        Mocha<br>
        Sinon<br>
        JWT<br>
        Jest
      </td>
      <td rowspan="2">
        Sequelize<br>
        Docker Compose
      </td>
    </tr>
  </tbody>
</table>

<br>

## Status
🚨 Está aplicação ainda esta em `desenvolvimento`, e por isso não possui as instruções de como clonar e exercultar.
