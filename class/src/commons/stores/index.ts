// recoil에서 사용하는 저장소
// atom => recoil에서 사용하는 저장소
import { atom } from "recoil";

// key와 default값으로 설정
export const isEditState = atom({
  key: "isEditState",
  default: true,
});
