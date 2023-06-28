import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

// Component를 상속받아 component 기능 사용 가능
export default function functionalCounterPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // componentDidMount 와 동일 // 대괄호 사용
  // 그려지고 나서 실행
  // 여기서 사용하는 배열의 의미 : 배열 내 존재하는 내용이 변경될 시 실행되는 것.
  // 의존성 배열이라고도 함
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []);

  // compoenetDidMount + componentDidUpdate 와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행");
  });

  useEffect(() => {
    // componentWillUnmount와 동일
    return () => {
      console.log("사라지기 전에 실행");
    };
  }, []);

  // useEffect 하나로 합치기

  useEffect(() => {
    console.log("그려지기 전에 실행");

    return () => {
      console.log("사라지기 전에 실행");
    };
  }, []);

  // useEffect 잘못된 사용법 (1. 추가렌더링 2. 무한루프)
  // useEffect(() => {
  //   SetWriter()
  // }.[count])

  const onClickCountUp = (): void => {
    console.log(count);
    setCount(count + 1);
  };

  const onClickMove = (): void => {
    void Router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
