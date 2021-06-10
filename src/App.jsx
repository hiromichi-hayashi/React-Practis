import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./Router/Router";

export default function App() {
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
      <Router />
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

・Link to=""で遷移したいURLを指定
・Switch　ページ遷移するときのurlを変更できる
・Route　どのページに飛ぶかを指定


*/
