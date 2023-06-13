import { MyEmail, MyEmailInput } from "../../../styles/01-02-emotion"

// page 앞글자는 대문자로 사용하는 것이 일반적
export default function EmotionPage () {
  
  // 대문자로 해야 적용됨
  return (
    <div>
      <MyEmail>이메일 : </MyEmail>
      <MyEmailInput type ="text" />
      <button>클릭하세요.</button>
      <img src="/next.svg"/>
    </div>
  )
}