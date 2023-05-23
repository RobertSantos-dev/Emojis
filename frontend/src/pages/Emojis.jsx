import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emojisGet } from "../api/emoji";

import ListEmojisPages from "../components/emojis/ListEmojisPages";
import '../styles/emojisStyles/Emojis.css';

export default function Emojis() {
  const [listEmojis, setListEmojis] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.emojis.emojis)
  const history = useHistory();

  useEffect(() => {
    emojisGet(dispatch)
    setListEmojis(selector)
  }, [selector]);

  return (
    <section>
      <ListEmojisPages
        listEmojis={ listEmojis }
        history={ history }
      />
    </section>
  );
}