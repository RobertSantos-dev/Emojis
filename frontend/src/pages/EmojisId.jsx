import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userEmojiGetId } from "../api/emoji";

import Description from "../components/emojisId/Description";

export default function EmojisId() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selector = useSelector(({ emojis, user }) => ({ emojis, user }));

  useEffect(() => {
    userEmojiGetId({
        userId: selector.user.login.id,
        emojiId: Number(id),
        dispatch,
      });
  }, [dispatch]);

  return (
    <>
      <Description
        emojisId={ selector.emojis.emojisId[0] }
        favorite={ selector.emojis.emojisId[1].favorite }
        userId={ selector.user }
        dispatch={ dispatch }
      />
    </>
  );
}
