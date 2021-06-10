import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import { InlienStyle } from "./component/InlineStyle";
import { CssModules } from "./component/CssModules";

export default function App() {
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

  /*
  useMemo 変数のメモ化複雑な変数をメモ化することで再レンダリングを減らせる

  const temp = useMemo(()=>{
    1+3
  },[]);

  console.log(temp);
*/

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <button onClick={onClickOpen}>表示</button>
      <InlienStyle />
      <CssModules />
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

/*
レンダリングの仕様

・stateが更新されたコンポーネントは再レンダリングされる
・propsが変更せれたコンポーネントも再レンダリングされる
・再レンダリングされたコンポーネント配下の子要素も再レンダリングされてしまう

*/
