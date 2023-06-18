import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  // return <Example school="다람쥐초틍학교" />;

  // 자식 요소
  return (
    <div>
      <div>++++++++빨파초++++++++++</div>
      <Example school="깔깔초등학교">
        {/* 쏙 들어가기 땡겨오기 */}
        <div>
          <input type="text" />
          <div>저는 철수입니다.</div>
          <button>클릭해주세요.</button>
        </div>
      </Example>
      <div>++++++++빨파초++++++++++</div>
    </div>
  );
}
