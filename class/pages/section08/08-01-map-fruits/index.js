// 컴포넌트위에 만드는 이유, 컴포넌트가 리렌더링돼도 다시 안만들어짐 - 효율적

const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "참외" },
];

export default function MapFruitsPage() {
  // 1. 가장 기본 예제
  const aaa = [
    <div>1 레드향</div>,
    <div>2 샤인머스켓</div>,
    <div>3 산청딸기</div>,
  ];

  // 2. 실무 백엔드 데이터 예제
  const bbb = FRUITS.map((el) => (
    <div>
      {el.number}, {el.title}
    </div>
  ));

  return (
    <div>
      <div>{aaa}</div>
      ===============
      <div>{bbb}</div>
      ===============
      <div>
        {FRUITS.map((el) => (
          <div>
            {el.number}, {el.title}
          </div>
        ))}
      </div>
    </div>
  );
}
