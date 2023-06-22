import { useState } from "react";
import Child1 from "../../../src/components/units/15-lifting-state-up/Child1";
import Child2 from "../../../src/components/units/15-lifting-state-up/Child2";

export default function CounterLetDocumentPage(): JSX.Element {
  const [count, setCount] = useState(0);

  // 함수를 넘겨주는 방식
  const onClickCount = (): void => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <Child1 count={count} setCount={setCount} />
      <div>==================</div>
      <Child2 count={count} onClickCount={onClickCount} />
    </>
  );
}

// 자식 간의 state를 공유하기 위해서는 부모를 활용하여 공유하는 방식.
