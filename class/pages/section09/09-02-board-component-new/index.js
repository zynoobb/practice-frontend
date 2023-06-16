import BoardComponent from "../../../src/components/units/board/09-board-component";

// 컴포넌트를 활용하여 재사용하기
export default function boardNewPage() {
  return <BoardComponent isEdit={false} />;
}
