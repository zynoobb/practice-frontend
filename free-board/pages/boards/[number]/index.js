import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  Avatar,
  AvatarWrapper,
  Body,
  BottomWrapper,
  Button,
  CardWrapper,
  Contents,
  CreatedAt,
  Header,
  Info,
  Title,
  Wrapper,
  Writer,
} from "../../../styles/boardsDetail";

export const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
      number
      createdAt
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  return (
    <Wrapper>
      <CardWrapper>
        <Header>
          <AvatarWrapper>
            <Avatar src="/images/avatar.svg" />
            <Info>
              <Writer>{data?.fetchBoard?.writer}</Writer>
              <CreatedAt>{data?.fetchBoard?.createdAt}</CreatedAt>
            </Info>
          </AvatarWrapper>
        </Header>
        <Body>
          <Title>{data?.fetchBoard?.title}</Title>
          <Contents>{data?.fetchBoard?.contents}</Contents>
        </Body>
      </CardWrapper>
      <BottomWrapper>
        <Button>목록으로</Button>
        <Button>수정하기</Button>
        <Button>삭제하기</Button>
      </BottomWrapper>
    </Wrapper>
  );
}
