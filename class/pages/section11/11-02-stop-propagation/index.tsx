import { useQuery, gql } from "@apollo/client";
import { type MouseEvent } from "react";
import CheckBox from "./checkbox";

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

  const qqq1 = () => {
    alert("1번 클릭");
  };

  const qqq4 = () => {
    alert("4번 클릭");
  };
  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} onClick={qqq1}>
          <CheckBox />
          <span style={{ margin: "10px" }} onClick={qqq4}>
            {el.number}
          </span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}

// 만약 각 요소마다 onClick 함수가 있더라도 qqq3만 실행시키고 싶다면?
// event.stopPropagation() 사용
