import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  console.log(router);
  const { data } = useQuery(FETCH_BOARD, {
    // [변수] 이름 넣기
    variables: { number: Number(router.query.number) },
  });
  console.log(data);

  // 하드코딩된 내용을 먼저 보여준 뒤,
  // 비동기로 가져온 데이터 보여주기 (data && 로 데이터 유무파악 후 보여주기)
  // 네트워크에서 slow3g로 확인 가능

  // 옵셔널 체이닝
  // {data && data.fetchBoard.writer} === {data?.fetchBoard.writer}
  // 삼항 연산자로도 사용 가능 {data ? data.fetchBoard.writer : "로딩 중"}

  return (
    <div>
      <div>{router.query.number}번 게시글로 페이지 이동이 완료되었습니다.</div>
      <div>작성자 : {data?.fetchBoard?.writer} </div>
      <div>제목 : {data?.fetchBoard?.title}</div>
      <div>내용 : {data?.fetchBoard?.contents}</div>
    </div>
  );
}
