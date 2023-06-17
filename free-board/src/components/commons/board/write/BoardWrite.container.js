import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";

export default function BoardWrite(props) {
  // 작성자 이름 / 비밀번호 / 제목 / 내용 / 주소 / 유튜브 / 메인설정
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (event.target.value) {
      setWriterError("");
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    }
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }
    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    }
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }
    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    }
  }
  function onChangeContents(event) {
    setContents(event.target.value);
    if (event.target.value) {
      setContentsError("");
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true);
    }
  }

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    console.log("asdds");
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            writer,
            title,
            contents,
          },
        });

        router.push(String(result.data.createBoard.number));
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    if (!title && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const valueObj = {
      number: Number(router.query.number),
    };
    if (title) valueObj.title = title;
    if (writer) valueObj.writer = writer;
    if (contents) valueObj.contents = contents;

    const result = await updateBoard({
      variables: valueObj,
    });
    router.push(`boards/${result.data.updateBoard.number}`);
  };
  return (
    <BoardWriteUI
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      isActive={isActive}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      data={props.data}
    />
  );
}
