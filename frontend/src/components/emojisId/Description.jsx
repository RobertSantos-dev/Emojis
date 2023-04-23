export default function Description({ emojisId }) {
  return (
    <section>
      <div>
        <span>{ emojisId.code }</span>
        <p>{ emojisId.description }</p>
      </div>
    </section>
  );
}
