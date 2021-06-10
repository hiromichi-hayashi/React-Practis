import { Link } from "react-router-dom";
import { InlienStyle } from "../component/InlineStyle";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページ</h1>
      <Link to="/page1/detailA">DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <InlienStyle />
    </div>
  );
};
