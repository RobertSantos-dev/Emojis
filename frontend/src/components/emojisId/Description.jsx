import { userEmojiPost } from "../../api/emoji";

export default function Description({ emojisId, userId, favorite, dispatch }) {
  return (
    <section>
      <div>
        <span>{ emojisId.code }</span>
        <p>{ emojisId.description }</p>
        { !favorite && (
          <button
            type="button"
            onClick={ () => userEmojiPost({
              userId: userId.login.id,
              emojiId: emojisId,
              dispatch
            }) }
          >
            Favoritar
          </button>
        )}
      </div>
    </section>
  );
}
