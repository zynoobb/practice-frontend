// 컨테이너
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer,
        title,
        contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`);
  };

  // 수정하기
  const onClickUpdate = async () => {
    // 빈 객체를 만들어 수정한 내용만 전달
    const valueObj = {
      number: Number(router.query.number),
    };
    if (title) valueObj.title = title;
    if (writer) valueObj.writer = writer;
    if (contents) valueObj.contents = contents;

    const result = await updateBoard({
      variables: valueObj,
    });

    console.log("update", valueObj);
    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  // 객체 사용해서 전달
  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data} // undefine이거나 data이거나 둘 중 하나
    />
  );
}
