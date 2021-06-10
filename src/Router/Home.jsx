import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "../ChildArea";

export const Home = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };
  //入力時の再レンダリングの抑制
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div>
      <h1>Homeページ</h1>
      <input value={text} onChange={onChangeText} />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
};
