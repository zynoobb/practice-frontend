import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  // 현재 클릭한 것의 타겟. event.currentTarget
  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    alert(event.currentTarget.id);
  };

  const qqq = () => {
    alert("클릭 title");
  };
  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} onClick={onClickAlert}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}

// 이벤트 버블링 => 최하위 요소 클릭 시, 상위 요소에 위치한 이벤트도 전파되어 일어남(자식=>부모)
// 이벤트 위임
// qqq 실행 이후 onClickAlert 실행
// 이벤트 캡쳐링 => 이벤트 버블링의 반대 (부모=>자식)
