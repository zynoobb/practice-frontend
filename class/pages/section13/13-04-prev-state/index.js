// prev-state

import { useState } from "react";

export default function CounterLetDocumentPage() {
  // let count = 0 // let은 리액트 전용 html 에서 변경을 감지하지 못함 => 따라서 state 사용해야 함
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    // 이 방식은 마지막 것만 적용됨
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // prev 임시 저장공간에 있는 저장된 데이터
    // prev 가 없을 경우 count를 가져옴
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  // function onClickCountDown() {
  //   setCount(count - 1);
  // }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      {/* <button onClick={onClickCountDown}>카운트 내리기</button> */}
    </div>
  );
}
