import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

// inmemory cash
const GLOBAL_STATE = new InMemoryCache();
interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken] = useRecoilState(accessTokenState);
  const client = new ApolloClient({
    // uri: "http://backend-example.codebootcamp.co.kr/graphql",
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` }, // 헤더에 자동으로 토큰 추가하여 사용.
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해놓기 => 나중에 더 자세히 알아보기
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
