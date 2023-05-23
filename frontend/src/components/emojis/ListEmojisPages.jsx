export default function ListEmojisPages({ listEmojis, history }) {
  return (
    <ul className='list'>
      { listEmojis.map((e) => (
        <li key={ e.id }>
          <button
            type='button'
            className='buttons'
            onClick={ () => history.push(`/emojis/${e.id}`) }
          >
            <span>{ e.code }</span>
            <span className='desc'>{ e.description }</span>
          </button>
        </li>
      )) }
    </ul>
  );
}
