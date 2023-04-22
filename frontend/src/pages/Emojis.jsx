import { useState, useEffect } from "react";
import { emojisGet } from "../api/emoji";
import { useDispatch, useSelector } from "react-redux";

import ListEmojisPages from "../components/emojis/ListEmojisPages";

export default function Emojis() {
  const [listEmojis, setListEmojis] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.emojis)

  useEffect(() => {
    emojisGet(dispatch)
    setListEmojis(selector)
  }, [selector]);

  return (
    <section>
      <ListEmojisPages listEmojis={ listEmojis } />
    </section>
  );
}