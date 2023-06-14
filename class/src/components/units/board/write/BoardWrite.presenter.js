import { RedInput, BlueButton } from "./BoardWrite.styles";
// 프레젠터
// 변수 사용해서 전달
export default function BoardWriteUI(props) {
  return (
    <div>
      작성자 : <RedInput type="text" onChange={props.bbb} />
      제목 : <RedInput type="text" onChange={props.ccc} />
      내용 : <RedInput type="text" onChange={props.ddd} />
      <BlueButton onClick={props.aaa}>GraphQL-API 요청하기</BlueButton>
    </div>
  );
}
