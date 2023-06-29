import { useMutation, gql } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: 111, title: "안녕하세요", contents: "반갑습니다") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMuationPage(): JSX.Element {
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async (): Promise<void> => {
    const result = await 나의함수();
    console.log(result);
  };

  // Common에서 만들어 import해서 사용
  // const wrapAsync = (비동기함수: () => Promise<void>) => () => {
  //   void 비동기함수();
  // };

  // 한줄일때 괄호 불필요
  return (
    <button onClick={wrapAsync(onClickSubmit)}>GraphQL-API 요청하기</button>
  );
}
