import { useState, useCallback, useMemo } from "react";
import { Switch, Route } from "react-router-dom";
import { ChildArea } from "../ChildArea";
import { CssModules } from "../component/CssModules";
import { Home } from "./Home";
import { Page2 } from "./Page2";
import { page1Routes } from "./Page1Routes";

export const Router = () => {
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
            {page1Routes.map((router) => (
              <Route
                key={router.path}
                exact={router.exact}
                path={`${url}${router.path}`}
              >
                {router.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/page2">
        <Page2 />
        <CssModules />
      </Route>
    </Switch>
  );
};
