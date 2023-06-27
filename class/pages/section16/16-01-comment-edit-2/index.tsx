import { useQuery, gql } from "@apollo/client";
import { type MouseEvent, useState } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage(): JSX.Element {
  // 배열로
  const [myIndex, setmyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  console.log(data?.fetchBoards);

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    // 새로운 배열을 생성하기 위해 얕은 복사 사용해야 함
    const qqq = [...myIndex];
    qqq[Number(event.currentTarget.id)] = true;
    setmyIndex(qqq);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, idx) =>
        !myIndex[idx] ? (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <button id={String(idx)} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        ) : (
          <input type="text" key={el._id} />
        )
      )}
      {new Array(10).fill(1).map((_, idx) => (
        <span key={idx + 1} id={String(idx + 1)}>
          {idx + 1}
        </span>
      ))}
    </div>
  );
}
