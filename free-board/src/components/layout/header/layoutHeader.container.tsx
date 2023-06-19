import { useRouter } from "next/router";
import LayoutHeaderUI from "./layoutHeader.presenter";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();

  const onClickLogo = (): void => {
    void router.push("/boards");
  };

  const onClickMoveToLogin = (): void => {
    void router.push("/login");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  );
}
