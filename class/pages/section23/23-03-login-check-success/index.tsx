import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { type IQuery } from "../../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function LoginSuccessPage(): JSX.Element {
  const router = useRouter();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 권한분기. token 유무 확인
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다.");
      void router.push("/section23/23-03-login-check");
    }
  });
  return <>{data?.fetchUserLoggedIn.name}님 환영합니다. ^_^</>;
}
