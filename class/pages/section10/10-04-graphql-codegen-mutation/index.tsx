import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMuationPage() {
  // const [나의함수] = useMutation<결과타입, 변수타입>(나의그래프큐엘셋팅);
  // 타입 적용 graphql 쿼리문 타입 적용
  const [나의함수] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables === $ 역할
        writer: "훈이",
        title: "안녕하세요",
        contents: "반갑습니다",
      },
    });
    console.log(result);
  };

  // 한줄일때 괄호 불필요
  return <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>;
}
