import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const onClickBack = () => {
    //goBack 遷移元に戻る
    history.goBack();
  };
  return (
    <div>
      <h1>Page1DetailAページ</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
