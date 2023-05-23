import { userEmojiPost } from "../../api/emoji";
import { RxHeart, RxHeartFilled } from "react-icons/rx";


export default function Description({ emojisId, userId, favorite, dispatch }) {
  return (
    <section>
      <div className='details'>
        <div className='emoji'>
          <span>{ emojisId.code }</span>
        </div>
        <div className='info-desc'>
          <p>Detalhes</p>
          <p>
            { emojisId.description }
          </p>
          { !favorite ? (
            <button
              type='button'
              className='favorite'
              onClick={ () => userEmojiPost({
                userId: userId.login.id,
                emojiId: emojisId,
                dispatch
              }) }
            >
              <RxHeart />
            </button>
          ) : (
            <button
              type='button'
              className='favorite'
            >
              <RxHeartFilled />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
