/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { type ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";
import {
  type IMutation,
  type IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };
  const onClickLogin = async (): Promise<void> => {
    try {
      console.log(email, password);
      // 1. 로그인 뮤테이션 날려서 accessToken 받아오기
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      console.log(result);
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      // 2. 받아온 accessToken을 globalState 저장하기
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다. 다시 시도해주세요");
        return;
      }
      setAccessToken(accessToken);
      // 로컬 스토리지에 저장
      localStorage.setItem("accessToken", accessToken); // 임시로 사용

      // 3. 로그인 성공 페이지로 이동
      void router.push("/section23/23-05-login-check-hoc-success");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}

// 글로벌스테이트에 저장 시 새로고침하면 토큰이 사라짐 => 로컬 스토리지 활용해보기
