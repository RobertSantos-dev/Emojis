import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { emojisIdGet } from "../api/emoji";

import Description from "../components/emojisId/Description";

export default function EmojisId() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selector = useSelector(({ emojis }) => (emojis.emojisId))

  useEffect(() => {
    emojisIdGet(dispatch, id)
  }, [selector])

  return (
    <>
      <Description emojisId={ selector } />
    </>
  );
}
