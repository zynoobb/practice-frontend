export default function TypescriptPage() {
  let aaa = "안녕하세요";

  let bbb: string = "반갑습니다";
  bbb = "안녕";

  // 타입 명시가 필요한 상황
  let ccc: number | string = 1000;
  ccc = "1000원";

  // 숫자 타입
  let ddd: number = 10;

  // 불린 타입
  let eee: boolean = true;
  eee = false;

  // 배열 타입
  let fff: number[] = [1, 2, 3, 4];
  let ggg: string[] = ["철수", "영희"];
  let hhhh: (string | number)[] = ["철수", 10]; // 타입을 추론해서 어떤 타입을 사용하는지 알아보기

  // 객체 타입

  interface IProfile {
    name: string;
    age: string | number;
    school: string;
    hobby?: string;
  }

  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  };

  // 함수 타입
  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }
  const result = add(1000, 2000, "원");

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };
  const result2 = add2(1000, 2000, "원");

  // any 타입

  return <></>;
}
