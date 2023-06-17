export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// partial 타입 /
type aaa = Partial<IProfile>;

// Required 타입 / 모두 필수
type bbb = Required<IProfile>;

// Pick 타입
type ccc = Pick<IProfile, "name" | "age">;

// Omit 타입
type ddd = Omit<IProfile, "school">;

// Record 타입
type eee = "철수" | "영희"; // Union 타입
let child: eee = "영희";
let child2: string = "영희";

type fff = Record<eee, IProfile>; // Record 타입

// 객체의 키들로 유니온 타입 만들기
type ggg = keyof IProfile; // keyof // name | age | school | hobby
let myprofile: ggg = "hobby";

// 타입과 인터페이스의 차이 => interface는 선언 병합 가능
export interface IProfile {
  candy: number; // 선언 병합으로 추가됨
}

// 배운 것 응용
let profile: Partial<IProfile> = {
  candy: 10,
};
