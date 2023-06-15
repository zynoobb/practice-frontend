import { useQuery, gql } from "@apollo/client";

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

  // 하드코딩된 내용을 먼저 보여준 뒤,
  // 비동기로 가져온 데이터 보여주기 (data && 로 데이터 유무파악 후 보여주기)
  // 네트워크에서 slow3g로 확인 가능

  // 옵셔널 체이닝
  // {data && data.fetchBoard.writer} === {data?.fetchBoard.writer}
  // 삼항 연산자로도 사용 가능 {data ? data.fetchBoard.writer : "로딩 중"}

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {/* <div>작성자 : {data?.fetchBoard?.writer} </div>
      <div>제목 : {data?.fetchBoard?.title}</div>
      <div>내용 : {data?.fetchBoard?.contents}</div>
      <div>1번 게시글로 페이지 이동이 완료되었습니다.</div> */}
    </div>
  );
}
