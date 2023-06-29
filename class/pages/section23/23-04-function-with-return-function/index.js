// 1. 함수를 리턴하는 함수
function aaa() {
  const apple = 10;

  return function bbb() {
    const banana = 20;
    console.log(banana);
    console.log(apple);
  };
}
aaa()();

// 2. 함수를 리턴하는 함수 - 인자
function aaa1(apple) {
  return function (banana) {
    console.log(banana);
    console.log(apple);
  };
}
aaa1(100)(200);

// 3. 함수를 리턴하는 함수 - 화살표 함수
const aaa2 = (apple) => (banana) => {
  console.log(banana);
  console.log(apple);
};

aaa2(100)(200);

// 4. 함수를 리턴하는 함수 - 인자 여럿
const aaa3 = (apple) => (banana) => (tomato) => (orange) => {
  console.log(apple);
  console.log(banana);
  console.log(tomato);
  console.log(orange);
};
aaa3(10)(20)(30)(40);
