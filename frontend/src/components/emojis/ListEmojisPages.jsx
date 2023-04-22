export default function ListEmojisPages({ listEmojis }) {
  return (
    <ul>
      { listEmojis.map((e) => (
        <li key={ e.id }>
          { e.code }
        </li>
      )) }
    </ul>
  );
}
