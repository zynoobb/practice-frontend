import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import type { MouseEvent } from "react";

const MyIcon = styled(UpCircleOutlined)`
  color: red;
  font-size: 50px;
`;
export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (event: MouseEvent<HTMLDivElement>): void => {
    console.log(event.currentTarget.id);
  };
  return (
    <div id="삭제할 게시글ID" onClick={onClickDelete}>
      <MyIcon rev={undefined} />
    </div>
  );
}
// 이벤트 버블링을 활용해 id값을 적용할 수 있음
