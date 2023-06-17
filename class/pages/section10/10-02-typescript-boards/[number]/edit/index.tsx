import BoardWrite from "../../../../../src/components/units/board/10-write/BoardWrite.container";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

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
export default function GraphqlMuationPage() {
  const router = useRouter();
  console.log("router", router);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
