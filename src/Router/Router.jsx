import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";
import { Page404 } from "./Page404";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
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
      <Route
        path="/page2"
        //{ match: { url } }＝/Page1 ページ遷移するときの同じURLを表記
        render={({ match: { url } }) => (
          <Switch>
            {page2Routes.map((router) => (
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
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
