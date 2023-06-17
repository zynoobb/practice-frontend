import { type MouseEvent } from "react";

export default function CheckBox() {
  const qqq2 = (event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    alert("2번 클릭");
  };
  const qqq3 = (event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    alert("3번 클릭");
  };
  return (
    <>
      <span onClick={qqq2}>
        <input type="checkbox" onClick={qqq3} />
      </span>
    </>
  );
}
