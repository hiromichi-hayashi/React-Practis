import { Link, useHistory } from "react-router-dom";
import { InlienStyle } from "../component/InlineStyle";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();
  const onClickDetailA = () => {
    //Linkのtoと同じ挙動をすることができる
    history.push("/page1/detailA");
  };
  return (
    <div>
      <h1>Page1ページ</h1>
      {/*　ページ遷移時のデータの受け渡し*/}
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      {/*　js側でのページ遷移 */}
      <button onClick={onClickDetailA}>DetailA</button>
      <InlienStyle />
    </div>
  );
};
