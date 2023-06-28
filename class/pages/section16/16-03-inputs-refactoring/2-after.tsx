import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

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
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async (): Promise<void> => {
    const result = await 나의함수({
      variables: {
        ...inputs,
      },
    });
    console.log(result);
  };

  const onChangeInputs = (event): void => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  // 2번째 prev를 활용한 방법
  const onChangeInputs2 = (event): void => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // 한줄일때 괄호 불필요
  return (
    <div>
      작성자 : <input type="text" id="writer" onChange={onChangeInputs} />
      제목 : <input type="text" id="title" onChange={onChangeInputs} />
      내용 : <input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>
    </div>
  );
}
