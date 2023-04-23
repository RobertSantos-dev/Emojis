export default function ListEmojisPages({ listEmojis, history }) {
  return (
    <ul>
      { listEmojis.map((e) => (
        <li key={ e.id }>
          <button
            type="button"
            onClick={ () => history.push(`/emojis/${e.id}`) }
          >
            { e.code }
          </button>
        </li>
      )) }
    </ul>
  );
}
