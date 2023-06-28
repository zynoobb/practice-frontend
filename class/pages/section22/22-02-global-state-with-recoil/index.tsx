// import { useState } from "react";
import { isEditState } from "../../../src/commons/stores";
import BoardWrite from "../../../src/components/units/22-global-state/BoardWrite.container";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export default function GlobalStateWithRecoilPage(props: any): JSX.Element {
  // const [isEdit, setIsEdit] = useState(true)
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(false);
  }, []);

  return <BoardWrite />;
}
