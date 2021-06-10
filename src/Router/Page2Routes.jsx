import { Page2 } from "./Page2";
import { UrlParameter } from "./UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    //URLパラメーターで使うときは　：　を使う
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
