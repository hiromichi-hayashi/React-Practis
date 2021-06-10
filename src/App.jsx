import { useState, useCallback, useMemo } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { ChildArea } from "./ChildArea";
import { InlienStyle } from "./component/InlineStyle";
import { CssModules } from "./component/CssModules";
import { Home } from "./Router/Home";
import { Page1 } from "./Router/Page1";
import { Page2 } from "./Router/Page2";
import { Page1DetailA } from "./Router/Page1DetailA";
import { Page1DetailB } from "./Router/Page1DetailB";

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
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
          <input value={text} onChange={onChangeText} />
          <button onClick={onClickOpen}>表示</button>
          <ChildArea open={open} onClickClose={onClickClose} />
        </Route>
        <Route
          path="/page1"
          //{ match: { url } }＝/Page1 ページ遷移するときの同じURLを表記
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
                <InlienStyle />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />
        <Route path="/page2">
          <Page2 />
          <CssModules />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

/*
レンダリングの仕様

・stateが更新されたコンポーネントは再レンダリングされる
・propsが変更せれたコンポーネントも再レンダリングされる
・再レンダリングされたコンポーネント配下の子要素も再レンダリングされてしまう


Ruteing

・react-ruter-domを使用

・Link aタグと同じ意味
・Switch　ページ遷移するときのurlを変更できる
・Route　どのページに飛ぶかを指定


*/
