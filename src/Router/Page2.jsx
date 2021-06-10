import { Link } from "react-router-dom";
import { CssModules } from "../component/CssModules";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページ</h1>
      <Link to="/page2/100">URL Parameter</Link>
      <CssModules />
    </div>
  );
};
